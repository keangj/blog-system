import Link from 'next/link';
import Head from 'next/head';
import 'github-markdown-css';
import 'styles/global.scss';
// 所有页面的根组件 全局配置
// 页面切换时 App 不会销毁，App 里面的组件会销毁
// 可用 App 保存全局状态
export default function APP ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>blog</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"></meta>
      </Head>
      <Component {...pageProps}/>
    </>
  )
};
