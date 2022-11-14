import React, { FunctionComponent, useEffect } from "react";
import ClaimsManagementView from "../views/ClaimsManagement/ClaimsManagementView";
import Layout from "../views/Layout/Layout";
import { useDispatch } from "react-redux";
import { onGetCommunityClaimsRequested } from "../redux/actions/claims.actions";
import useTypedSelector from "../hooks/useTypedSelector";

export const ClaimsManagementContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { claims, loading } = useTypedSelector((state) => state.claims);

    const communityId = '3b82b641-d9dd-4906-a993-8d8abfff7744';

    useEffect(() => {
        dispatch(onGetCommunityClaimsRequested(communityId))
    }, [ dispatch ])

    return <Layout name={"Nombre"}>
        <ClaimsManagementView claims={claims} loading={loading}/>
    </Layout>
}
