import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onCreateAServiceRequested, onGetProviderServicesRequested } from 'redux/actions/providers.actions';
import Layout from 'views/Layout/Layout';
import Services from 'views/Services/Services';
import { IServiceFormData } from 'views/Services/types';
import useTypedSelector from '../hooks/useTypedSelector';


const ServicesContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);
  const { providerServices, changeServices } = useTypedSelector((state) => state.providers);

  useEffect(() => {
    if (user) {
      onGetProviderServicesRequested(user.id)

    }
  }, [dispatch, changeServices, user])

  const onPostAService = (formData: IServiceFormData) => {
    const data = {
      providerId: user.id,
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      monetizationType: formData.monetizationType,
    }
    dispatch(onCreateAServiceRequested(data));
  }

  const onEditService = (formData: IServiceFormData) => {
    const data = {
      providerId: user.id,
      ...formData
    }
    //dispatch(onEditAServiceRequested(data));
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
