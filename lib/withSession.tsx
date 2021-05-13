import { NextApiHandler } from "next";
import { withIronSession } from "next-iron-session";

export function withSession (handler: NextApiHandler) {
  return withIronSession(handler, {
    // password: process.env.SECRET_COOKIE_PASSWORD,
    password: '34438372-c01d-4e79-aba6-3de5a7425c5a',
    cookieName: 'blog',
    cookieOptions: {
      secure: false
    }
  })
}