import React, { FunctionComponent, useEffect, useState } from "react";
import ClaimsManagementView from "../views/ClaimsManagement/ClaimsManagementView";
import Layout from "../views/Layout/Layout";
import { useDispatch } from "react-redux";
import { onGetCommunityClaimsRequested } from "../redux/actions/claims.actions";
import useTypedSelector from "../hooks/useTypedSelector";
import { onSearchNameRequested } from "redux/actions/providers.actions";
import { onCommunityPostCommentRequested } from "redux/actions/community.actions";
import { IClaim } from "types/claims.types";

export const ClaimsManagementContainer: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { claims, loading, claimHasChanged } = useTypedSelector((state) => state.claims);
    const { commentsChanged } = useTypedSelector((state) => state.community);
    const { user } = useTypedSelector((state) => state.user);

    const [comments, setComments] = useState<any>(null);
    const [status, setStatus] = useState<any>(null);
    const [openComments, setOpenComments] = useState(false);

    const [opens, setOpens] = useState<any>(null);

    useEffect(() => {
        if (claims) {
            const statesArray: any = [];
            const opensArray: any = [];

            for (let i = 0; i < claims.length; i++) {
                statesArray.push(claims[i].status)
                opensArray.push(false)

            }
            setStatus(statesArray)
            setOpens(opensArray)
        }

    }, [claims])

    useEffect(() => {
        if (user) {
            dispatch(onGetCommunityClaimsRequested(user.id))
        }
    }, [dispatch, user])


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
        setComments(comments.concat(data))
        dispatch(onCommunityPostCommentRequested(data))
        //dispatch(onGetCommunityClaimsRequested(user.id));
    }

    return <Layout name={"Nombre"}
        onSearchNav={onSearchNav}>
        <ClaimsManagementView
            claims={claims}
            loading={loading}
            onPostComment={onPostComment}
            user={user}
            comments={comments}
            setComments={setComments}
            status={status}
            setStatus={setStatus}
            opens={opens}
            setOpens={setOpens}
            openComments={openComments}
            setOpenComments={setOpenComments}
        />
    </Layout>
}
