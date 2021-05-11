import md5 from "md5";
import { getDatabaseConnection } from "lib/getDatabaseConnection";
import { NextApiHandler } from "next";
import { User } from "src/entity/User";

const Users: NextApiHandler = async (req, res) => {
  const { username, password } = req.body;
  const connection = await getDatabaseConnection();
  const user = await connection.manager.findOne(User, { where: { username }})

  res.setHeader('Content-Type', 'application/json');

  if (user) {
    res.statusCode = 200;
    const passwordDigest = md5(password); 
    if (user.passwordDigest === passwordDigest) {
      res.statusCode = 200;
      res.write(JSON.stringify({username: ['登录成功']}))
    } else {
      res.statusCode = 422;
      res.write(JSON.stringify({password: ['密码错误']}))
    }
  } else {
    res.statusCode = 422;
    res.write(JSON.stringify({username: ['账户不存在']}))
  }
  // res.json(JSON.stringify(errors));
  res.end();
}
export default Users;