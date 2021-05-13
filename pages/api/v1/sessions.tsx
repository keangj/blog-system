import { withSession } from "lib/withSession";
import { NextApiHandler } from "next";
import { SignIn } from "src/model/signIn";

const Sessions: NextApiHandler = async (req, res) => {
  const { username, password } = req.body;
  req.session
  const signIn = new SignIn();
  signIn.username = username;
  signIn.password = password;
  await signIn.validate()
  
  res.setHeader('Content-Type', 'application/json');

  if (signIn.hasErrors()) {
    res.statusCode = 422;
    res.write(JSON.stringify(signIn.errors));
  } else {
    req.session.set('currentUser', signIn.user);
    await req.session.save();
    res.statusCode = 200;
    res.write(JSON.stringify(signIn.user));
  }
  res.end();
}
export default withSession(Sessions);