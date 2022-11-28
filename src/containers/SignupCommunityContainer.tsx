import useTypedSelector from 'hooks/useTypedSelector';
import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchNameRequested } from 'redux/actions/providers.actions';
import { onSignupCommunityRequested } from '../redux/actions/community.actions';
import Layout from '../views/Layout/Layout';
import SignupCommunity from '../views/SignupCommunity/SignupCommunity';
import { ISignupCommunityFormData } from '../views/SignupCommunity/types';

const SignupCommunityContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);

    const getBase64Picture = async (file: any) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            }
        });
    }

    const onSignupClick = async (formData: ISignupCommunityFormData) => {
        const image: any = await getBase64Picture(formData.base64Picture[0]);
        if (!!image && formData) {
            const body = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                photo: image.split(',')[1],
            }
            dispatch(onSignupCommunityRequested(body));
        }
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>

            <SignupCommunity
                onSignupClick={onSignupClick}
            />
        </Layout>
    )
}

export default SignupCommunityContainer;
