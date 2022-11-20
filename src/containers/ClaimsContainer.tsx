import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import useTypedSelector from 'hooks/useTypedSelector';
import { IClaimFormData } from 'views/Claims/types';
import Claims from 'views/Claims/Claims';
import { onEditClaimRequested, onPostCommentRequested, onRegisterAClaimRequested, onUserGetClaimsRequested } from 'redux/actions/user.actions';

const ClaimsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, changeClaimsList, claims } = useTypedSelector((state) => state.user);

    const claimsWithComments = claims && claims.map((claim) => (
        {
            ...claim,
            comments: [{
                id: 1,
                userName: "Yo",
                comment: "Me gustaria saber el estado de mi reclamo",
            },
            {
                id: 2,
                userName: "Admin",
                comment: "Aun esta siendo evaluado, a penas tengamos novedades le avisaremos por este medio",
            }]
        }
    ))

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
            username: user.firstName
        }
        dispatch(onPostCommentRequested(data))
        dispatch(onUserGetClaimsRequested(user.id));
    }

    return (
        <Layout name={user && user.firstName}>
            <Claims
                onRegisterAClaim={onRegisterAClaim}
                claims={claimsWithComments}
                onEditClaim={onEditClaim}
                onPostComment={onPostComment}
            />
        </Layout>
    )
}

export default ClaimsContainer;
