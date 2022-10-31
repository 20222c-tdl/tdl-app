import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { onLoginUserRequested } from '../redux/actions/user.actions';
import Layout from '../views/Layout/Layout';
import Login from '../views/Login/Login';
import { ILoginFormData } from '../views/Login/types';

const LoginUserContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.user);

  const onLoginClick = (formData: ILoginFormData) => {
    dispatch(onLoginUserRequested(formData));
  }

  return (
    <Layout name={data && data.firstName}>
      <Login onLoginClick={onLoginClick} />
    </Layout>
  )
}

export default LoginUserContainer;
