import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onGetPlaceInfoRequested, onMakePlaceReservationRequested } from 'redux/actions/places.actions';
import Layout from 'views/Layout/Layout';
import PlaceDetails from 'views/PlaceDetails/PlaceDetails';
import useTypedSelector from '../hooks/useTypedSelector';

const ServicesContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { placeData } = useTypedSelector((state) => state.places);

    const params = useParams();
    const placeId = params.id;

    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        if (placeId) {
            dispatch(onGetPlaceInfoRequested(placeId));
        }
    }, [dispatch, placeId])

    const getOneHourInterval = (startTime: string, endTime: string) => {
        const result = [];
        let initialHour = Number(startTime.split(':')[0]);
        const finalHour = Number(endTime.split(':')[0]);
        while (initialHour <= finalHour) {
            result.push(`${initialHour}:00`);
            initialHour++;
        }
        return result;
    };

    const times = getOneHourInterval('09:00', '21:00');


    const formatDateTime = (date: Date, selectedTime: string) => {
        const yymmdd = (date.toISOString()).split('T')[0]
        const hour = selectedTime.split(':')[0]
        let formattedDate;
        if (Number(hour) < 10) {
            const ceroDate = '0' + hour + ':00:00'
            formattedDate = yymmdd + 'T' + ceroDate + '.000Z'
        } else {
            formattedDate = yymmdd + 'T' + hour + ':00:00' + '.000Z'
        }
        return formattedDate;
    };

    const onMakeReservation = () => {
        const formattedStartingDate = formatDateTime(date, selectedTime);
        const endHour = Number(selectedTime.split(':')[0]) + 1
        const formattedEndingDate = formatDateTime(date, endHour.toString());

        const data = {
            placeId: placeId,
            userId: user.id,
            startingDate: new Date(formattedStartingDate).toISOString(),
            finishingDate: new Date(formattedEndingDate).toISOString()
        }
        dispatch(onMakePlaceReservationRequested(data))
    }

    const onSearchNav = (searchPlace: string) => {
        //dispatch(onSearchPlaceRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            {
                placeData && <PlaceDetails
                    place={placeData}
                    date={date}
                    setDate={setDate}
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                    onMakeReservation={onMakeReservation}
                    times={times}
                />
            }
        </Layout>
    )

}

export default ServicesContainer;
