import axios, { AxiosResponse } from "axios";
import { useForm } from "hooks/useForm";
import { NextPage } from "next";

const SignUp: NextPage = (props) => {
  const onSubmit = (formData: typeof initFormData) => {
    axios.post(`api/v1/user`, formData).then(resource => {
      window.location.href = '/sign_in';
    }, error => {
      console.log(error.response);
      if (error.response) {
        const response: AxiosResponse = error.response;
        setErrors({...response.data});
      }
    });
  }
  const initFormData = { username: '', password: '', passwordConfirmation: ''}
  const {form, setErrors} = useForm({
    initFormData,
    fields: [
      { label: '账户', type: 'text', key: 'username' },
      { label: '输入密码', type: 'password', key: 'password' },
      { label: '确认密码', type: 'password', key: 'passwordConfirmation' }
    ],
    onSubmit,
    buttons: <button type="submit">注册</button>
  })
  return (
    <div>{form}</div>
  )
};

export default SignUp;
