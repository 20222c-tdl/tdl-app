import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCreateAServiceRequested, onEditAServiceRequested, onGetProviderServicesRequested } from 'redux/actions/providers.actions';
import Layout from 'views/Layout/Layout';
import Services from 'views/Services/Services';
import { IService, IServiceFormData } from 'views/Services/types';
import useTypedSelector from '../hooks/useTypedSelector';


const ServicesContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);
  const { providerServices, changeServices } = useTypedSelector((state) => state.providers);

  useEffect(() => {
    if (user) {
      dispatch(onGetProviderServicesRequested(user.id))

    }
  }, [dispatch, changeServices, user])

  const onPostAService = (formData: IServiceFormData) => {
    let monetizationString;
    if (formData.monetizationType === "Fixed") {
      monetizationString = "FIXED";
    } else {
      monetizationString = "BY_THE_HOUR";
    }
    const data = {
      providerId: user.id,
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      monetizationType: monetizationString,
    }
    dispatch(onCreateAServiceRequested(data));
  }

  const onEditService = (formData: IServiceFormData) => {
    let monetizationString;
    if (formData.monetizationType === "Fixed") {
      monetizationString = "FIXED";
    } else {
      monetizationString = "BY_THE_HOUR";
    }
    const data = {
      id: formData.id,
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      monetizationType: monetizationString,
    }
    dispatch(onEditAServiceRequested(data));
  }

  return (
    <Layout name={user && user.firstName}>
      <Services
        onPostAService={onPostAService}
        providerServices={providerServices}
        onEditService={onEditService}
      />
    </Layout>
  )

}

export default ServicesContainer;
