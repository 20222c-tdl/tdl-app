import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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


    useEffect(() => {
        if (placeId) {
            //dispatch(onGetPlaceInfoRequested(placeId));
        }
    }, [dispatch, placeId])

    const place = {
        id: "4352435231243",
        name: "Soccer field",
        description: "Synthetic grass soccer field",
    };

    const onMakeReservation = (searchName: string) => {
        //dispatch(onMakeResrvationRequested(searchName))
    }

    const onSearchNav = (searchPlace: string) => {
        //dispatch(onSearchPlaceRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            <PlaceDetails
                place={place}
                date={date}
                setDate={setDate}
                onMakeReservation={onMakeReservation}
            />
        </Layout>
    )

}

export default ServicesContainer;
