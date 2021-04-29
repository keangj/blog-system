import Head from 'next/head'
import Link from 'next/link'
import png from 'assets/images/123.jpg'
import { GetServerSideProps, NextPage } from 'next'
import UAParser from 'ua-parser-js'
import { useEffect, useState } from 'react'
import { getDatabaseConnection } from 'lib/getDatabaseConnection'

type props = {
  browser: {
    name: string;
  }
}

 const index:NextPage<props> = (props) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const w = document.documentElement.clientWidth;
    setWidth(w);
  })
  return (
    <div>
      <h1>title</h1>
      <p>{props.browser.name}</p>
      <p>{width}</p>

      <style jsx>
        {`
        /* styled-jsx 适合简单需求 */ 
          h1 {
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connect = await getDatabaseConnection();
  console.log('connect');
  // 请求到来之后运行, 无法获取客户端信息
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser
    }
  }
}