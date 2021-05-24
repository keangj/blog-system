import { getDatabaseConnection } from "lib/getDatabaseConnection";
import { withSession } from "lib/withSession";
import { NextApiHandler } from "next";
import { Post } from "src/entity/Post";

const Posts: NextApiHandler = withSession(async (req, res) => {
  const connection = await getDatabaseConnection();
  const user = req.session.get('currentUser');
  if (req.method === 'POST') {
    const { title, content } = req.body;
    const post = new Post();
    post.title = title;
    post.content = content;
    post.author = user
    await connection.manager.save(post);
    res.json(post)
  }
})
export default Posts