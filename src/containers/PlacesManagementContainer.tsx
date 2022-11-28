import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onCreateAPlaceRequested, onGetPlacesRequested } from 'redux/actions/places.actions';
import Layout from 'views/Layout/Layout';
import PlacesManagement from 'views/PlacesManagement/PlacesManagement';
import { IPlaceFormData } from 'views/PlacesManagement/types';
import useTypedSelector from '../hooks/useTypedSelector';


const PlacesManagementContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { changePlaces, places } = useTypedSelector((state) => state.places);

    useEffect(() => {
        if (user) {
            dispatch(onGetPlacesRequested(user.id))
        }
    }, [dispatch, changePlaces, user])

    const onPostAPlace = (formData: IPlaceFormData) => {
        const data = {
            ...formData,
            communityId: user.id,
        }
        dispatch(onCreateAPlaceRequested(data));
    }

    const onEditPlace = (formData: IPlaceFormData) => {
        //dispatch(onEditAPlaceRequested(formData));
    }

    return (
        <Layout name="community">
            {
                places && <PlacesManagement
                    onPostAPlace={onPostAPlace}
                    places={places}
                    onEditPlace={onEditPlace}
                />
            }
        </Layout>
    )

}

export default PlacesManagementContainer;
