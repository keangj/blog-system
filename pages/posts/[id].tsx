import { getDatabaseConnection } from "lib/getDatabaseConnection";
import marked from "marked";
import { GetServerSideProps, NextPage } from "next";
import { Post } from "src/entity/Post";

type props = {
  post: Post;
}
const postsShow: NextPage<props> = (props) => {
  const { title, content } = props.post
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: marked(content) }}></article>
      </div>
      <style jsx>{`
        .container {
          margin: 100px auto;
          width: 800px;
          h1 {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}

export default postsShow;

export const getServerSideProps: GetServerSideProps<any, {id: string}> = async (context) => {
  const { id } = context.params
  const connection = await getDatabaseConnection();
  const post = await connection.manager.findOne(Post, id);
  // 请求到来之后运行, 无法获取客户端信息
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}