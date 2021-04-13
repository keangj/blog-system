import { NextPage } from "next";
import { usePosts } from "hooks/usePosts";

const PostsIndex: NextPage = () => {
  const { posts } = usePosts();
  return (
    <div>
      {posts.map(p => <div key={p.id}>{p.id}</div>)}
    </div>
  )
};

export default PostsIndex;