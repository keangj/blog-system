import { NextPage } from "next";
import Link from "next/link";
// import React from "react";
import img from 'assets/images/123.jpg'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>blog</h1>
        <img src="vercel.svg" alt="" />
        <img src={`${img.src}`} />
        <p><Link href="/posts"><a>查看文章</a></Link></p>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  )
}

export default Home;