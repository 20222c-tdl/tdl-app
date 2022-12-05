import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchNameRequested } from 'redux/actions/providers.actions';
import { onCancelReservationRequested, onGetAllReservationsRequested, onGetCardsRequested, onGetPlacesReservationsRequested, onGetUserReviewsRequested, onLeaveAReviewRequested, onPayReservationRequested } from 'redux/actions/user.actions';
import MyReservations from 'views/MyReservations/MyReservations';
import { IReviewFormData } from 'views/MyReservations/types';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const MyReservationsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, reservations, userReviews, changeReviews, changeReservations, cards, placesReservations } = useTypedSelector((state) => state.user);

    const [reservationId, setReservationId] = useState("");
    const [providerId, setProviderId] = useState("");
    const [selectedCard, setSelectedCard] = useState<number>(-1);

    useEffect(() => {
        if (user) {
            dispatch(onGetAllReservationsRequested(user.id))
            dispatch(onGetUserReviewsRequested(user.id))
            dispatch(onGetPlacesReservationsRequested(user.id))
        }
    }, [dispatch, user, changeReviews, changeReservations]);

    useEffect(() => {
        if (user) {
            dispatch(onGetCardsRequested(user.id));
        }
    }, [dispatch, user])


    const onLeaveAReview = (formData: IReviewFormData) => {
        const data = {
            userId: user.id,
            providerId: providerId,
            rating: formData.rating,
            comment: formData.comment,
            hiredServicesId: reservationId,
        }
        dispatch(onLeaveAReviewRequested(data))
    }

    const onCancelReservation = (reservationId: string) => {
        dispatch(onCancelReservationRequested(reservationId))
    }

    const onPay = () => {
        dispatch(onPayReservationRequested(reservationId))
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            <MyReservations
                onLeaveAReview={onLeaveAReview}
                onCancelReservation={onCancelReservation}
                onPay={onPay}
                reservations={reservations}
                userReviews={userReviews}
                setReservationId={setReservationId}
                setProviderId={setProviderId}
                cards={cards}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
                placesReservations={placesReservations}
            />
        </Layout>
    )
}

export default MyReservationsContainer;
