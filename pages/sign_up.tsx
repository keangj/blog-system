import axios from "axios";
import { useForm } from "hooks/useForm";
import { NextPage } from "next";

const SignUp: NextPage = (props) => {
  const initFormData = { username: '', password: '', passwordConfirmation: ''}
  const {form} = useForm({
    initFormData,
    fields: [
      { label: '账户', type: 'text', key: 'username' },
      { label: '输入密码', type: 'password', key: 'password' },
      { label: '确认密码', type: 'password', key: 'passwordConfirmation' }
    ],
    submit: {
      request: (formData) => axios.post(`/api/v1/user`, formData),
      success: () => {}
    },
    buttons: <button type="submit">注册</button>
  })
  return (
    <div>{form}</div>
  )
};

export default SignUp;
