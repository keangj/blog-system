import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  id: string;

}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {    
    axios.get('/api/v1/posts').then(response => {
      setPosts(response.data);
    });
  }, []);
  return { posts, setPosts, isLoading, setIsLoading };
}