import { NextPage } from "next";
import Link from "next/link";
// import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>blog</h1>
        <p><Link href="/posts"><a>查看文章</a></Link></p>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  )
}

export default Home;