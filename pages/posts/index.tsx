import { NextPage } from "next";
import { usePosts } from "hooks/usePosts";
import { getPosts } from "lib/posts";

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
      {posts.map(p => <div key={p.id}>{p.id}</div>)}
    </div>
  )
};

export default PostsIndex;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) }
  }
}
