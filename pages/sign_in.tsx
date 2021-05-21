import axios, { AxiosResponse } from "axios";
import { useForm } from "hooks/useForm";
import { withSession } from "lib/withSession";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { User } from "src/entity/User";

type Props = {
  user: User;
}

const SignIn: NextPage<Props> = (props) => {
  // console.log(props.user);
  const onSubmit = (formData: typeof initFormData) => {
    axios.post(`api/v1/sessions`, formData).then(resource => {
      console.log(resource);
    }, error => {
      console.log(error.response);
      if (error.response) {
        const response: AxiosResponse = error.response;
        setErrors(response.data)
      }
    });
  }
  const initFormData = {username: '', password: ''}
  const {form, setErrors} = useForm({
    initFormData,
    fields: [
      { label: '账户', type: 'text', key: 'username' }, 
      { label: '密码', type: 'password', key: 'password' }
    ],
    onSubmit,
    buttons: <button type="submit">登录</button>
  })
  return (
    <div>{form}</div>
  )
};

export default SignIn;


export const getServerSideProps: GetServerSideProps = withSession(async (context: GetServerSidePropsContext) => {
  // @ts-ignore
  const user = context.req.session.get('currentUser');
  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }
})
