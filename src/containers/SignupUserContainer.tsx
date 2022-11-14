import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import { ISignupUserFormData } from '../views/SignupUser/types';
import SignupUser from '../views/SignupUser/SignupUser';
import { onSignupUserRequested } from '../redux/actions/user.actions';
import useTypedSelector from 'hooks/useTypedSelector';
import { onGetAllCommunitiesRequested } from 'redux/actions/community.actions';

const SignupUserContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { allCommunities } = useTypedSelector((state) => state.community);
    const { user } = useTypedSelector((state) => state.user);
  

    useEffect(() => {
        dispatch(onGetAllCommunitiesRequested());
    }, [dispatch])

    const onSignupClick = (formData: ISignupUserFormData) => {
        const idCommunityChoosed = allCommunities.filter(x => x.name === formData.community).map(x => x.id);
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            communityId: idCommunityChoosed[0],
            phoneNumber: formData.phoneNumber
        }
        dispatch(onSignupUserRequested(data));
    }

    return (
        <Layout name={user && user.firstName}>
            <SignupUser
                onSignupClick={onSignupClick}
                allCommunities={allCommunities}
            />
        </Layout>
    )
}

export default SignupUserContainer;
