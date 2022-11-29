import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchNameRequested } from 'redux/actions/providers.actions';
import { onCancelReservationRequested, onGetAllReservationsRequested, onGetUserReviewsRequested, onLeaveAReviewRequested, onPayReservationRequested } from 'redux/actions/user.actions';
import MyReservations from 'views/MyReservations/MyReservations';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const MyReservationsContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, reservations, userReviews, changeReviews, changeReservations } = useTypedSelector((state) => state.user);

    const [reservationId, setReservationId] = useState("");
    const [providerId, setProviderId] = useState("");
    const [selectedCard, setSelectedCard] = useState<number>(-1);

    useEffect(() => {
        if (user) {
            dispatch(onGetAllReservationsRequested(user.id))
            dispatch(onGetUserReviewsRequested(user.id))
            //dispatch(onGetUserCardsRequested(user.id))
        }
    }, [dispatch, user, changeReviews, changeReservations]);


    const cards = [{
        id: 1,
        number: "123443520945",
        name: "Rocio Tarda",
        expiry: "12/28",
        cvc: "123",
    }]

    const onLeaveAReview = (formData: any) => {
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
            />
        </Layout>
    )
}

export default MyReservationsContainer;
