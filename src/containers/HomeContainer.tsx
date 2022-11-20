import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onFilterCategoryRequested, onGetAllProvidersCategoriesRequested, onGetAllProvidersRequested } from 'redux/actions/providers.actions';
import Home from 'views/Home/Home';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const HomeContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { allCategories, providers, allProviders } = useTypedSelector((state) => state.providers);
  const { user} = useTypedSelector((state) => state.user);
  const [currentIdCategory, setCurrentIdCategory] = useState("");

  let providersFiltered;

  useEffect(() => {
    dispatch(onGetAllProvidersCategoriesRequested());
    dispatch(onGetAllProvidersRequested());
  }, [dispatch]);

  const categoryNames = allCategories && allCategories.map(x => x.name);

  if (providers && currentIdCategory) {
    providersFiltered = providers.filter(x => x.categoryId === currentIdCategory);
  }

  const onFilterCategory = (category: string) => {
    const idCategoryChoosed = allCategories.filter(x => x.name === category).map(x => x.id);
    setCurrentIdCategory(idCategoryChoosed[0]);
    dispatch(onFilterCategoryRequested(idCategoryChoosed[0]));
  }

  return (
    <Layout name={user && user.firstName}>
      <Home
        categoryNames={categoryNames}
        onFilterCategory={onFilterCategory}
        providers={providersFiltered}
        allProviders={allProviders}
      />
    </Layout>
  )
}

export default HomeContainer;
