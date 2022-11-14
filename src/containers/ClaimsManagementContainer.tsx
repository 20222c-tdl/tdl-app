import React, { FunctionComponent, useEffect } from "react";
import ClaimsManagementView from "../views/ClaimsManagement/ClaimsManagementView";
import Layout from "../views/Layout/Layout";
import { useDispatch } from "react-redux";
import { onGetCommunityClaimsRequested } from "../redux/actions/claims.actions";
import useTypedSelector from "../hooks/useTypedSelector";

export const ClaimsManagementContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { claims, loading, claimHasChanged } = useTypedSelector((state) => state.claims);
    const { communityInfo } = useTypedSelector((state) => state.community);

    useEffect(() => {
        if (communityInfo) {
            dispatch(onGetCommunityClaimsRequested(communityInfo.id))
        }
    }, [dispatch, claimHasChanged])


    return <Layout name={"Nombre"}>
        <ClaimsManagementView claims={claims} loading={loading} />
    </Layout>
}
