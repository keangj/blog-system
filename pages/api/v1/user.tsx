import md5 from "md5";
import { NextApiHandler } from "next";
import { User } from "src/entity/User";

const Posts: NextApiHandler = async (req, res) => {
  console.log(req.body);
  const { username, password, passwordConfirmation } = req.body;
  const errors = {
    username: [] as string[], password: [] as string[], passwordConfirmation: [] as string[]
  }
  if (username.trim() === '') {
    errors.username.push('不能为空');
  }
  if (!/[a-zA-Z0-9]/.test(username.trim())) {
    errors.username.push('格式错误');
  }
  if (username.trim().length > 40) {
    errors.username.push('太长');
  }
  if (username.trim().length < 3) {
    errors.username.push('太短');
  }
  if (password.trim() === '') {
    errors.password.push('不能为空');
  }
  if (password !== passwordConfirmation) {
    errors.passwordConfirmation.push('密码不匹配');
  }
  const hasError = Object.values(errors).find(value => value.length > 0);
  res.setHeader('Content-Type', 'application/json');

  if (hasError) {
    res.statusCode = 422;
    res.write(JSON.stringify(errors));
  } else {
    const user = new User();
    user.username = username;
    user.passwordDigest = md5(password);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }
  // res.json(JSON.stringify(errors));
  res.end();
}
export default Posts;