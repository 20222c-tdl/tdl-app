import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onGetAllProvidersReviewsRequested } from 'redux/actions/providers.actions';
import Reviews from 'views/Reviews/Reviews';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';

const ReviewsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { providerReviews } = useTypedSelector((state) => state.providers);

    useEffect(() => {
        if (user) {
            onGetAllProvidersReviewsRequested(user.id)
        }
    }, [dispatch, user])


    return (
        <Layout name={user && user.firstName} >
            <Reviews reviews={providerReviews} />
        </Layout>
    )
}

export default ReviewsContainer;
