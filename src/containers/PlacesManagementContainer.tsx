import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onCreateAPlaceRequested, onEditAPlaceRequested, onGetPlacesRequested } from 'redux/actions/places.actions';
import Layout from 'views/Layout/Layout';
import PlacesManagement from 'views/PlacesManagement/PlacesManagement';
import { IPlaceData, IPlaceFormData } from 'views/PlacesManagement/types';
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

    const getBase64Picture = async (file: any) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            }
        });
    }

    const onPostAPlace = async (formData: IPlaceFormData) => {
        const image: any = await getBase64Picture(formData.base64Picture[0]);
        const data = {
            name: formData.name,
            description: formData.description,
            communityId: user.id,
            photo: image.split(',')[1],
        }
        dispatch(onCreateAPlaceRequested(data));
    }

    const onEditPlace = async (formData: IPlaceData) => {
        const image: any = await getBase64Picture(formData.base64Picture[0]);
        const data = {
            name: formData.name,
            description: formData.description,
            photo: image.split(',')[1],
            id: formData.id
        }
        dispatch(onEditAPlaceRequested(data));
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
