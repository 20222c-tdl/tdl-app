import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { onLoginCommunityRequested } from '../redux/actions/community.actions';
import Layout from '../views/Layout/Layout';
import Login from '../views/Login/Login';
import { ILoginFormData } from '../views/Login/types';

const LoginCommunityContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.user);

  const onLoginClick = (formData: ILoginFormData) => {
    dispatch(onLoginCommunityRequested(formData));
  }

  return (
    <Layout name={data && data.firstName}>
      <Login onLoginClick={onLoginClick} />
    </Layout>
  )
}

export default LoginCommunityContainer;
