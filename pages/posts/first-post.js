import Link from 'next/link'
import Head from 'next/head'
import styles from 'styles/first-post.module.scss'
import png from 'assets/images/123.jpg'

console.log(png)
export default function FirstPost () {
  return (
    <div>
      {/*<Head>*/}
      {/*  <title>first</title>*/}
      {/*</Head>*/}
      第一篇
      <Link href="/"><a>回到首页</a></Link>
      <div >
        <div className={styles.x}>content</div>
      </div>
      <img className={styles.img} src={png} alt=""/>
    </div>
  )
}
