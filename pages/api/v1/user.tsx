import { NextApiHandler } from "next";
import { User } from "src/entity/User";

const Posts: NextApiHandler = async (req, res) => {
  console.log(req.body);
  const { userName, password, passwordConfirmation } = req.body;
  const user = new User();
  if (password !== passwordConfirmation) {
    const errors = { passwordConfirmation: ['密码不匹配'] };
    res.statusCode = 422;
    res.setHeader('Content-Type', 'application/json');
    // res.json(JSON.stringify(errors));
    res.write(JSON.stringify(errors));
    res.end();
  }
}
export default Posts;