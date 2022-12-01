import React, { FunctionComponent, useEffect } from "react";
import ClaimsManagementView from "../views/ClaimsManagement/ClaimsManagementView";
import Layout from "../views/Layout/Layout";
import { useDispatch } from "react-redux";
import { onGetCommunityClaimsRequested } from "../redux/actions/claims.actions";
import useTypedSelector from "../hooks/useTypedSelector";
import { onSearchNameRequested } from "redux/actions/providers.actions";
import { onCommunityPostCommentRequested } from "redux/actions/community.actions";

export const ClaimsManagementContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { claims, loading, claimHasChanged } = useTypedSelector((state) => state.claims);
    const { commentsChanged } = useTypedSelector((state) => state.community);
    const { user } = useTypedSelector((state) => state.user);
    useEffect(() => {
        if (user) {
            dispatch(onGetCommunityClaimsRequested(user.id))
        }
    }, [dispatch, claimHasChanged, user, commentsChanged])


    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    const onPostComment = (formData: any) => {
        const data = {
            ...formData,
            entityId: user.id,
            role: user.role,
            date: (new Date()).toISOString(),
        }

        dispatch(onCommunityPostCommentRequested(data))
        dispatch(onGetCommunityClaimsRequested(user.id));
    }

    return <Layout name={"Nombre"}
        onSearchNav={onSearchNav}>
        <ClaimsManagementView
            claims={claims}
            loading={loading}
            onPostComment={onPostComment}
            user={user}
        />
    </Layout>
}
