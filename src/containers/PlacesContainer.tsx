import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onGetPlacesRequested } from 'redux/actions/places.actions';
import Layout from 'views/Layout/Layout';
import Places from 'views/Places/Places';
import useTypedSelector from '../hooks/useTypedSelector';


const PlacesContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { places } = useTypedSelector((state) => state.places);

    useEffect(() => {
        if (user) {
            dispatch(onGetPlacesRequested(user.communityId))
        }
    }, [dispatch, user])

    const onSearchNav = (searchName: string) => {
        //dispatch(onSearchPlaceRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            {
                places && <Places
                    places={places}
                />
            }
        </Layout>
    )

}


export default PlacesContainer;
