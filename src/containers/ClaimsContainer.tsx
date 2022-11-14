import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import history from '../helpers/history';
import { ISignupUserFormData } from '../views/SignupUser/types';
import SignupUser from '../views/SignupUser/SignupUser';
import { onSignupUserRequested } from '../redux/actions/user.actions';
import useTypedSelector from 'hooks/useTypedSelector';
import { IClaimFormData } from 'views/Claims/types';
import Claims from 'views/Claims/Claims';

const ClaimsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data, user } = useTypedSelector((state) => state.user);

    const userHardcode = {
        id: 'asdf',
        communityId: "dafdsf"
    }

    const onRegisterAClaim = (formData: IClaimFormData) => {
        const data = {
            userId: userHardcode.id,
            communityId: userHardcode.communityId,
            ...formData
        }
        //dispatch(onSignupUserRequested(data));
    }

    return (
        <Layout name={"Name"}>
            <Claims
                onRegisterAClaim={onRegisterAClaim}
            />
        </Layout>
    )
}

export default ClaimsContainer;
