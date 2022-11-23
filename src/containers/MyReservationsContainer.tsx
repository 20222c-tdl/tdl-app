import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onGetAllReservationsRequested } from 'redux/actions/user.actions';
import MyReservations from 'views/MyReservations/MyReservations';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const MyReservationsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);

    useEffect(() => {
        dispatch(onGetAllReservationsRequested(user.id))
    }, [dispatch, user]);


    const onLeaveAReview = () => {
    }

    const onCancelReservation = () => {
    }

    return (
        <Layout name={user && user.firstName}>
            <MyReservations
                onLeaveAReview={onLeaveAReview}
                onCancelReservation={onCancelReservation}
            />
        </Layout>
    )
}

export default MyReservationsContainer;
