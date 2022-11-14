import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onFilterCategoryRequested, onGetAllProvidersCategoriesRequested } from 'redux/actions/providers.actions';
import Home from 'views/Home/Home';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const HomeContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { allCategories, providers } = useTypedSelector((state) => state.providers);
  const { user } = useTypedSelector((state) => state.user);
  const [currentIdCategory, setCurrentIdCategory] = useState("");

  let providersFiltered;

  useEffect(() => {
    dispatch(onGetAllProvidersCategoriesRequested());
  }, [dispatch]);

  const categoryNames = allCategories && allCategories.map(x => x.name);

  const brand = {
    name: "Categories:",
    to: "/home"
  };


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
        brand={brand}
        categoryNames={categoryNames}
        onFilterCategory={onFilterCategory}
        providers={providersFiltered}
      />
    </Layout>
  )
}

export default HomeContainer;
