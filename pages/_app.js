import Link from 'next/link'
import Head from 'next/head'
import 'styles/global.scss'

export default function APP ({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>common</title>
      </Head>
      <Component {...pageProps}/>
    </div>
  )
}
