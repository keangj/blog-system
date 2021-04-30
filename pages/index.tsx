import Head from 'next/head'
import Link from 'next/link'
import png from 'assets/images/123.jpg'
import { GetServerSideProps, NextPage } from 'next'
import UAParser from 'ua-parser-js'
import { useEffect, useState } from 'react'
import { getDatabaseConnection } from 'lib/getDatabaseConnection'
import { Post } from 'src/entity/Post'

type props = {
  browser: {
    name: string;
  },
  posts: Post[]
}

 const index:NextPage<props> = (props) => {
  const { posts } = props;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const w = document.documentElement.clientWidth;
    setWidth(w);
  })
  return (
    <div>
      <h1>title</h1>
      <p>{props.browser.name}</p>
      <p>{width}</p>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}

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

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connection = await getDatabaseConnection();
  console.log('connection');
  const posts = await connection.manager.find(Post);
  console.log(posts);
  // 请求到来之后运行, 无法获取客户端信息
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}