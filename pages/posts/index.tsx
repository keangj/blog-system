import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

type Post = {
  id: string;

}
const PostsIndex: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {    
    axios.get('/api/v1/posts').then(response => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      {posts.map(p => <div key={p.id}>{p.id}</div>)}
    </div>
  )
};

export default PostsIndex;