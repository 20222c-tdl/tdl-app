import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import useTypedSelector from 'hooks/useTypedSelector';
import { IClaimFormData } from 'views/Claims/types';
import Claims from 'views/Claims/Claims';
import { onEditClaimRequested, onRegisterAClaimRequested, onUserGetClaimsRequested } from 'redux/actions/user.actions';

const ClaimsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, changeClaimsList, claims } = useTypedSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            dispatch(onUserGetClaimsRequested(user.id));
        }
    }, [dispatch, changeClaimsList, user])

    const onRegisterAClaim = (formData: IClaimFormData) => {
        const info = {
            userId: user.id,
            communityId: user.communityId,
            ...formData
        }
        dispatch(onRegisterAClaimRequested(info));
    }

    const onEditClaim = (formData: IClaimFormData) => {
        dispatch(onEditClaimRequested(formData))
    }

    return (
        <Layout name={user && user.firstName}>
            <Claims
                onRegisterAClaim={onRegisterAClaim}
                claims={claims}
                onEditClaim={onEditClaim}
            />
        </Layout>
    )
}

export default ClaimsContainer;
