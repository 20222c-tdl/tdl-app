import React, { FunctionComponent } from 'react';
import Home from 'views/Home/Home';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const HomeContainer: FunctionComponent = () => {
  const { user } = useTypedSelector((state) => state.user);

  return (
    <Layout name={user && user.firstName}>
      <Home/>
    </Layout>
  )
}

export default HomeContainer;
