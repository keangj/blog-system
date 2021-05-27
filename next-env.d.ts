/// <reference types="next" />
/// <reference types="next/types/global" />
// 这个文件有 import 那么这个文件就不是默认全局
import * as next from 'next';
import { NextApiRequest } from 'next';
import { Session } from 'next-iron-session';
declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "next" {
  interface NextApiRequest {
    session: Session
  }
}
