import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import { ISignupUserFormData } from '../views/SignupUser/types';
import SignupUser from '../views/SignupUser/SignupUser';
import { onSignupUserRequested } from '../redux/actions/user.actions';
import useTypedSelector from 'hooks/useTypedSelector';
import { onGetAllCommunitiesRequested } from 'redux/actions/community.actions';
import { onSearchNameRequested } from 'redux/actions/providers.actions';

const SignupUserContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { allCommunities } = useTypedSelector((state) => state.community);
    const { user } = useTypedSelector((state) => state.user);


    useEffect(() => {
        dispatch(onGetAllCommunitiesRequested());
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

    const onSignupClick = async (formData: ISignupUserFormData) => {
        const idCommunityChoosed = allCommunities.filter(x => x.name === formData.community).map(x => x.id);
        const image: any = await getBase64Picture(formData.base64Picture[0]);
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            communityId: idCommunityChoosed[0],
            phoneNumber: formData.phoneNumber,
            photo: image.split(',')[1],
        }
        dispatch(onSignupUserRequested(data));
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            <SignupUser
                onSignupClick={onSignupClick}
                allCommunities={allCommunities}
            />
        </Layout>
    )
}

export default SignupUserContainer;
