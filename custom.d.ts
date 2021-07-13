// 这个文件有 import 那么这个文件就不是默认全局
import * as next from 'next';
import { NextApiRequest } from 'next';
import { Session } from 'next-iron-session';
declare module "*.jpg" {
  const value: string;
  export default value;
}
// 在 NextApiRequest 添加 Session 解决 req.session TS 报错
declare module "next" {
  interface NextApiRequest {
    session: Session
  }
}