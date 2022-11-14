import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onLoginProviderRequested } from 'redux/actions/providers.actions';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';
import Login from '../views/Login/Login';
import { ILoginFormData } from '../views/Login/types';


const LoginProviderContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);

  const onLoginClick = (formData: ILoginFormData) => {
    dispatch(onLoginProviderRequested(formData));
  }

  return (
    <Layout name={user && user.firstName}>
      <Login onLoginClick={onLoginClick}/>
    </Layout>
  )
}

export default LoginProviderContainer;
