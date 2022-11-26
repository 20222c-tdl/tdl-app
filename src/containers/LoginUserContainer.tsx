import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchNameRequested } from 'redux/actions/providers.actions';
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

  const onSearchNav = (searchName: string) => {
    dispatch(onSearchNameRequested(searchName))
  }

  return (
    <Layout name={user && user.firstName}
      onSearchNav={onSearchNav}>
      <Login onLoginClick={onLoginClick} />
    </Layout>
  )
}

export default LoginUserContainer;
