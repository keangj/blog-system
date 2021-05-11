import { getDatabaseConnection } from "lib/getDatabaseConnection";
import { NextApiHandler } from "next";
import { User } from "src/entity/User";

const Users: NextApiHandler = async (req, res) => {
  const { username, password, passwordConfirmation } = req.body;
  const connection = await getDatabaseConnection();
  const user = new User();
  user.username = username;
  user.password = password;
  user.passwordConfirmation = passwordConfirmation;
  
  await user.validate();
  res.setHeader('Content-Type', 'application/json');
  if (user.hasErrors()) {
    res.statusCode = 422;
    res.write(JSON.stringify(user.errors));
  } else {
    await connection.manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }
  // res.json(JSON.stringify(errors));
  res.end();
}
export default Users;