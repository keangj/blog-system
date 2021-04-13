import { getPosts } from "lib/posts";
import { NextApiHandler } from "next";

const Posts: NextApiHandler = async (req, res) => {
  const posts = await getPosts()
  console.log(posts);
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(JSON.stringify(posts))
  // res.json({ name: 'John Doe' })
  res.end()
}
export default Posts