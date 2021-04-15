import { getPost, getPostIds } from "lib/posts";
import { NextPage } from "next";

type props = {
  post: Post;
}
const postsShow: NextPage<props> = (props) => {
  const { title, date, htmlContent } = props.post
  return (
    <div>
      <h1>{title}</h1>
      <div>{date}</div>
      <article dangerouslySetInnerHTML={{ __html: htmlContent }}></article>
    </div>
  )
}

export default postsShow;

export const getStaticPaths = async () => {
  const idList = await getPostIds();
  return {
    paths: idList.map(id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps = async (x: any) => {
  const id = x.params.id
  const post = await getPost(id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}