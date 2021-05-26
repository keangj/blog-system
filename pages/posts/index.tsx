import Link from 'next/link'
import { GetServerSideProps, NextPage } from 'next'
import UAParser from 'ua-parser-js'
import { useEffect, useState } from 'react'
import { getDatabaseConnection } from 'lib/getDatabaseConnection'
import { Post } from 'src/entity/Post'
import qs from 'querystring';
import { usePagination } from 'hooks/usePagination'

type Props = {
  browser: {
    name: string;
  },
  posts: Post[];
  count: number;
  page: number;
  totalPage: number;
  pageSize: number;
}

 const PostsIndex:NextPage<Props> = (props) => {
  const { posts, count, page, totalPage, pageSize } = props;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const w = document.documentElement.clientWidth;
    setWidth(w);
  })
  const pagination = usePagination({
    page, totalPage
  })
  return (
    <div>
      <h1>title</h1>
      <p>{props.browser.name}</p>
      <p>{width}</p>
      {posts.map(post => 
        <div key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      )}
      <footer>
        {pagination}
      </footer>
      <style jsx>
        {`
        /* styled-jsx 适合简单需求 */ 
          h1 {
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default PostsIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const index = context.req.url.indexOf('?');
  const search = context.req.url.substr(index + 1);
  const query = qs.parse(search);
  const page = Number.parseInt(query.page?.toString()) || 1;
  const pageSize = 1
  const connection = await getDatabaseConnection();
  const [posts, count] = await connection.manager.findAndCount(Post, {
    skip: (page - 1) * pageSize, take: pageSize
  });
  console.log(posts, count);


  console.log(qs.parse(context.req.url));
  // 请求到来之后运行, 无法获取客户端信息
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
      posts: JSON.parse(JSON.stringify(posts)),
      count,
      page,
      pageSize,
      totalPage: Math.ceil(count / pageSize)
    }
  }
}