import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import useTypedSelector from 'hooks/useTypedSelector';
import { onGetAllProvidersCategoriesRequested, onSearchNameRequested, onSignupProviderRequested } from 'redux/actions/providers.actions';
import SignupProvider from 'views/SignupProvider/SignupProvider';
import { ISignupProviderFormData } from 'views/SignupProvider/types';

const SignupProviderContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { allCategories } = useTypedSelector((state) => state.providers);

    useEffect(() => {
        dispatch(onGetAllProvidersCategoriesRequested());
    }, [dispatch])

    const getBase64Picture = async (file: any) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            }
        });
    }

    const onSignupClick = async (formData: ISignupProviderFormData) => {
        const idCategoryChoosed = allCategories.filter(x => x.name === formData.category).map(x => x.id);
        const image: any = await getBase64Picture(formData.base64Picture[0]);

        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            identityNumber: formData.identityNumber,
            phoneNumber: formData.phoneNumber,
            categoryId: idCategoryChoosed[0],
            photo: image.split(',')[1],
        }
        dispatch(onSignupProviderRequested(data));
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={"Name"}
            onSearchNav={onSearchNav}>

            <SignupProvider
                onSignupClick={onSignupClick}
                allCategories={allCategories}
            />
        </Layout>
    )
}

export default SignupProviderContainer;
