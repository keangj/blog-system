import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import { useCallback, useState } from "react";

const PostsIndex: NextPage = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: ''
  });
  const [errors, setErrors] = useState({
    username: [],
    password: [],
    passwordConfirmation: []
  });
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    axios.post(`api/v1/sessions`, formData).then(resource => {
      console.log(resource);
    }, error => {
      console.log(error.response);
      if (error.response) {
        const response: AxiosResponse = error.response;
        setErrors({...response.data});
      }
    });
  }, [formData]);
  return (
    <div>
      <h1>登录</h1>
      <form onSubmit={onSubmit}>
        <label>账户
          <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}/>
        </label>
        {errors.username?.length > 0 && <div>{errors.username.join()}</div>}
        <label>输入密码
          <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}/>
        </label>
        {errors.password?.length > 0 && <div>{errors.password.join()}</div>}
        <button type="submit" onSubmit={onSubmit}>登录</button>
      </form>
    </div>
  )
};

export default PostsIndex;
