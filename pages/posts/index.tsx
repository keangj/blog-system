import { NextPage } from "next";
import { usePosts } from "hooks/usePosts";
import { getPosts } from "lib/posts";
import Link from "next/link";

// const PostsIndex: NextPage = () => {
//   const { posts } = usePosts();
//   return (
//     <div>
//       {posts.map(p => <div key={p.id}>{p.id}</div>)}
//     </div>
//   )
// };

type Props = {
  posts: Post[];
}

const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      <h1>list</h1>
      {posts.map(p => 
        <div key={p.id}>
          {/* <Link href={`/posts/${p.id}`}>
            <a>{p.id}</a>
          </Link> */}
          <Link href="/posts/[id]" as={`/posts/${p.id}`}>
              <a>{p.title}</a>
          </Link>
        </div>
      )}
    </div>
  )
};

export default PostsIndex;

export const getStaticProps = async () => {
  // 开发环境，每次请求到来后运行。生产环境，build 时运行
  const posts = await getPosts();
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) }
  }
}
