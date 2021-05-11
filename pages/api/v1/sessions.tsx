import { NextApiHandler } from "next";
import { SignIn } from "src/model/signIn";

const Users: NextApiHandler = async (req, res) => {
  const { username, password } = req.body;
  const user = new SignIn();
  user.username = username;
  user.password = password;
  await user.validate()
  
  res.setHeader('Content-Type', 'application/json');

  if (user.hasErrors()) {
    res.statusCode = 422;
    res.write(JSON.stringify(user.errors))
  } else {
    res.statusCode = 200;
    res.write(JSON.stringify(user.user))
  }
  res.end();
}
export default Users;