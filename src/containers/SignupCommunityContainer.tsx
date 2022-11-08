import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onSignupCommunityRequested } from '../redux/actions/community.actions';
import Layout from '../views/Layout/Layout';
import SignupCommunity from '../views/SignupCommunity/SignupCommunity';
import { ISignupCommunityFormData } from '../views/SignupCommunity/types';
import history from '../helpers/history';

const SignupCommunityContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const onSignupClick = (formData: ISignupCommunityFormData) => {
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }
        dispatch(onSignupCommunityRequested(data));
    }

    const onGoToSigninUser = () => {
        history.push('/loginUser');
    }

    const onGoToSignupUser = () => {
        history.push('/');
    }

    const onGoToSigninCommunity = () => {
        history.push('/loginCommunity');
    }
    return (
        <Layout name={"Name"}>
            <SignupCommunity
                onSignupClick={onSignupClick}
                onGoToSigninUser={onGoToSigninUser}
                onGoToSignupUser={onGoToSignupUser}
                onGoToSigninCommunity={onGoToSigninCommunity}
            />
        </Layout>
    )
}

export default SignupCommunityContainer;
