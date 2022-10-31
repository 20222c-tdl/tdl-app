import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import history from '../helpers/history';
import { ISignupUserFormData } from '../views/SignupUser/types';
import SignupUser from '../views/SignupUser/SignupUser';
import { onSignupUserRequested } from '../redux/actions/user.actions';

const SignupUserContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const communities = [
        { value: 'Pride Canning', label: 'Pride Canning' },
        { value: 'Haras del Sur', label: 'Haras del Sur' },
        { value: 'Los Lagos Nordelta', label: 'Los Lagos Nordelta' },
        { value: 'La escondida', label: 'La escondida' },
    ]

    const onSignupClick = (formData: ISignupUserFormData) => {
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            community: formData.community,
            phoneNumber: formData.phoneNumber
        }
        dispatch(onSignupUserRequested(data));
    }

    const onGoToSignIn = () => {
        history.push('/login');
    }

    return (
        <Layout name={"Name"}>
            <SignupUser
                onSignupClick={onSignupClick}
                onGoToSignIn={onGoToSignIn}
                communities={communities}
            />
        </Layout>
    )
}

export default SignupUserContainer;
