import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { onLoginUserRequested } from '../redux/actions/user.actions';
import Layout from '../views/Layout/Layout';
import Login from '../views/Login/Login';
import { ILoginFormData } from '../views/Login/types';


const LoginUserContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);
  

  const onLoginClick = (formData: ILoginFormData) => {
    dispatch(onLoginUserRequested(formData));
  }

  return (
    <Layout name={user && user.firstName}>
      <Login onLoginClick={onLoginClick}/>
    </Layout>
  )
}

export default LoginUserContainer;
