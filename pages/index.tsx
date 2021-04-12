import Head from 'next/head'
import Link from 'next/link'
import png from 'assets/images/123.jpg'

console.log(png)
export default function Home() {
  return (
    <div>
      <h1>title</h1>
      <p>article</p>

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
