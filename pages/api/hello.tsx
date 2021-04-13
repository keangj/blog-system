// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import {getPosts} from "../../lib/posts";
// const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
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
