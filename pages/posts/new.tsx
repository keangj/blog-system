import axios from "axios";
import { useForm } from "hooks/useForm";
import { NextPage } from "next";


const PostsNew: NextPage = (props) => {
  const initFormData = { title: '', content: '' }
  const { form } = useForm({
    initFormData,
    fields: [
      { label: '标题', type: 'text', key: 'title' }, 
      { label: '内容', type: 'textarea', key: 'content' }
    ],
    submit: {
      request: (formData) => axios.post(`/api/v1/posts`, formData),
      success: (resource) => {
        window.location.href = '/posts'
      }
    },
    buttons: <button type="submit">提交</button>
  })
  return (
    <div>{form}</div>
  )
};

export default PostsNew;
