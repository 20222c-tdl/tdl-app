import React, { FunctionComponent, useEffect } from "react";
import ClaimsManagementView from "../views/ClaimsManagement/ClaimsManagementView";
import Layout from "../views/Layout/Layout";
import { useDispatch } from "react-redux";
import { onGetCommunityClaimsRequested } from "../redux/actions/claims.actions";
import useTypedSelector from "../hooks/useTypedSelector";
import { onSearchNameRequested } from "redux/actions/providers.actions";

export const ClaimsManagementContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { claims, loading, claimHasChanged } = useTypedSelector((state) => state.claims);
    const { communityInfo } = useTypedSelector((state) => state.community);

    useEffect(() => {
        if (communityInfo) {
            dispatch(onGetCommunityClaimsRequested(communityInfo.id))
        }
    }, [dispatch, claimHasChanged])


    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return <Layout name={"Nombre"}
        onSearchNav={onSearchNav}>
        <ClaimsManagementView claims={claims} loading={loading} />
    </Layout>
}
