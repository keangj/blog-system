import md5 from "md5";
import { getDatabaseConnection } from "lib/getDatabaseConnection";
import { User } from "src/entity/User";

export class SignIn {
  username: string;
  password: string;
  user: User;
  errors = { username: [] as string[], password: [] as string[] };

  async validate () {
    const connection = await getDatabaseConnection();
    const user = await connection.manager.findOne(User, { where: { username: this.username }});
    this.user = user;
    if (user) {
      if (user.passwordDigest !== md5(this.password)) {
        this.errors.password.push('密码错误');
      }
    } else {
      this.errors.username.push('账户不存在');
    }
  }

  hasErrors () {
    return !!Object.values(this.errors).find(value => value.length > 0)
  }
}