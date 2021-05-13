/// <reference types="next" />
/// <reference types="next/types/global" />

import * as next from 'next';
import { NextApiRequest } from 'next';
import { Session } from 'next-iron-session';
declare module "*.jpg" {
  const value: string;
  export default value;
}

type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
  htmlContent: string;
}

declare module "next" {
  interface NextApiRequest {
    session: Session
  }
}
