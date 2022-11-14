import useTypedSelector from 'hooks/useTypedSelector';
import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onSignupCommunityRequested } from '../redux/actions/community.actions';
import Layout from '../views/Layout/Layout';
import SignupCommunity from '../views/SignupCommunity/SignupCommunity';
import { ISignupCommunityFormData } from '../views/SignupCommunity/types';

const SignupCommunityContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);

    const onSignupClick = (formData: ISignupCommunityFormData) => {
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }
        dispatch(onSignupCommunityRequested(data));
    }

    return (
        <Layout name={user && user.firstName}>
            <SignupCommunity
                onSignupClick={onSignupClick}
            />
        </Layout>
    )
}

export default SignupCommunityContainer;
