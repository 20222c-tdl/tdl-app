import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout/Layout';
import useTypedSelector from 'hooks/useTypedSelector';
import { IClaim, IClaimData, IClaimFormData, ICommentFormData } from 'views/Claims/types';
import Claims from 'views/Claims/Claims';
import { onEditClaimRequested, onPostCommentRequested, onRegisterAClaimRequested, onUserGetClaimsRequested } from 'redux/actions/user.actions';
import { onSearchNameRequested } from 'redux/actions/providers.actions';

const ClaimsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, changeClaimsList, claims } = useTypedSelector((state) => state.user);

    const claimsSorted = claims && claims.sort(
        (claim1: IClaimData, claim2: IClaimData) => {
            const date1 = new Date(claim1.createdAt);
            const date2 = new Date(claim2.createdAt);
            return date2.getTime() - date1.getTime();
        });

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

    const onEditClaim = (formData: IClaim) => {
        const data = {
            type: formData.type,
            mainIssue: formData.mainIssue,
            description: formData.description
        }
        dispatch(onEditClaimRequested(data, formData.id))
    }

    const onPostComment = (formData: ICommentFormData) => {
        const data = {
            ...formData,
            entityId: user.id,
            role: user.role,
            date: (new Date()).toISOString(),
        }
        dispatch(onPostCommentRequested(data))
        dispatch(onUserGetClaimsRequested(user.id));
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            <Claims
                onRegisterAClaim={onRegisterAClaim}
                claims={claimsSorted}
                onEditClaim={onEditClaim}
                onPostComment={onPostComment}
            />
        </Layout>
    )
}

export default ClaimsContainer;
