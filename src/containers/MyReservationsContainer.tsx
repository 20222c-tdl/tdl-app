import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onGetAllReservationsRequested, onGetUserReviewsRequested } from 'redux/actions/user.actions';
import MyReservations from 'views/MyReservations/MyReservations';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const MyReservationsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, reservations, userReviews } = useTypedSelector((state) => state.user);

    const [reversationId, setReservationId] = useState("");

    useEffect(() => {
        if (user) {
            dispatch(onGetAllReservationsRequested(user.id))
            dispatch(onGetUserReviewsRequested(user.id))
        }
    }, [dispatch, user]);


    const onLeaveAReview = (formData: FormData) => {
    }

    const onCancelReservation = (reservationId: string) => {
    }

    return (
        <Layout name={user && user.firstName}>
            <MyReservations
                onLeaveAReview={onLeaveAReview}
                onCancelReservation={onCancelReservation}
                reservations={reservations}
                userReviews={userReviews}
                setReservationId={setReservationId}
            />
        </Layout>
    )
}

export default MyReservationsContainer;
