import React, { FunctionComponent } from 'react';
import Input from '../../components/Input/Input';
import { TitleContainer } from './styles';
import { MyReservationsProps } from './types';

const MyReservations: FunctionComponent<MyReservationsProps> = (props: MyReservationsProps) => {
    const { onLeaveAReview, onCancelReservation } = props;
    return (
        <TitleContainer> Reservations </TitleContainer>
    );
}

export default MyReservations;

