import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onFilterCategoryRequested, onGetAllProvidersCategoriesRequested, onGetAllProvidersRequested, onSearchNameRequested } from 'redux/actions/providers.actions';
import Home from 'views/Home/Home';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const HomeContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { allCategories, allProviders } = useTypedSelector((state) => state.providers);
  const { user } = useTypedSelector((state) => state.user);
  const [currentIdCategory, setCurrentIdCategory] = useState("");

  useEffect(() => {
    dispatch(onGetAllProvidersCategoriesRequested());
    dispatch(onGetAllProvidersRequested());
  }, [dispatch]);


  const categoryNames = allCategories && allCategories.map(x => x.name);
  const onFilterCategory = (category: string) => {
    const idCategoryChoosed = allCategories.filter(x => x.name === category).map(x => x.id);
    setCurrentIdCategory(idCategoryChoosed[0]);
    dispatch(onFilterCategoryRequested(idCategoryChoosed[0]));
  }

  const onClearFilter = () => {
    dispatch(onGetAllProvidersRequested());
  }

  const onSearchNav = (searchName: string) => {
    dispatch(onSearchNameRequested(searchName))
  }

  return (
    <Layout name={user && user.firstName}
      onSearchNav={onSearchNav}>
      <Home
        categoryNames={categoryNames}
        onFilterCategory={onFilterCategory}
        allProviders={allProviders}
        onClearFilter={onClearFilter}
      />
    </Layout>
  )
}

export default HomeContainer;
