import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import useTypedSelector from 'hooks/useTypedSelector';
import { IClaimFormData } from 'views/Claims/types';
import Claims from 'views/Claims/Claims';
import { onEditClaimRequested, onPostCommentRequested, onRegisterAClaimRequested, onUserGetClaimsRequested } from 'redux/actions/user.actions';
import { onSearchNameRequested } from 'redux/actions/providers.actions';

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

    const onPostComment = (formData: any) => {
        const data = {
            ...formData,
            entityId: user.id,
            role: user.role,
            date: (new Date()).toISOString(),
        }

        dispatch(onPostCommentRequested(data))
        dispatch(onUserGetClaimsRequested(user.id));
    }

    //split('T')[0]

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>

            <Claims
                onRegisterAClaim={onRegisterAClaim}
                claims={claims}
                onEditClaim={onEditClaim}
                onPostComment={onPostComment}
            />
        </Layout>
    )
}

export default ClaimsContainer;
