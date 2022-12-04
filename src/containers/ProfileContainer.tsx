import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onProviderUpdateProfileRequested, onSearchNameRequested } from 'redux/actions/providers.actions';
import { onAddNewCardRequested, onDeleteCardCardRequested, onGetCardsRequested, onUpdatePasswordRequested, onUpdateProfileRequested } from 'redux/actions/user.actions';
import { ICard } from 'types/user.types';
import { ICardFormData } from 'views/Profile/components/AddPaymentMethod/types';
import { IPasswordFormData } from 'views/Profile/components/PasswordForm/types';
import { IPersonalInfoFormData } from 'views/Profile/components/PersonalInfoForm/types';
import Profile from 'views/Profile/Profile';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const ProfileContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user, cards, changeCards } = useTypedSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            dispatch(onGetCardsRequested(user.id));
        }
    }, [dispatch, changeCards, user])


    const getBase64Picture = async (file: any) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            }
        });
    }

    const onEditProfileClick = async (formData: any) => {
        if (user.role === "user") {
            const image: any = await getBase64Picture(formData.base64Picture[0]);
            const data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                phoneNumber: formData.phoneNumber,
                photo: image.split(',')[1],
            }
        dispatch(onUpdateProfileRequested(data, user.id));
        } else {
            const image: any = await getBase64Picture(formData.base64Picture[0]);
            const data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                identityNumber: formData.identityNumber,
                phoneNumber: formData.phoneNumber,
                photo: image.split(',')[1],
            }
            dispatch(onProviderUpdateProfileRequested(data, user.id));
        }
    }

    const onEditPassClick = (formData: IPasswordFormData) => {
        const data = {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword
        }
        dispatch(onUpdatePasswordRequested(data, user.id));
    }

    const onRemoveCard = (cardId: string) => {
        dispatch(onDeleteCardCardRequested(cardId));
    }

    const onAddCard = (formData: ICardFormData) => {
        const data = {
            userId: user.id,
            number: formData.number,
            name: formData.name,
            expirationDate: formData.expiry,
            cvc: formData.cvc
        }
        dispatch(onAddNewCardRequested(data));
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            {user && <Profile
                user={user}
                onEditProfileClick={onEditProfileClick}
                onEditPassClick={onEditPassClick}
                cards={cards}
                onRemoveCard={onRemoveCard}
                onAddCard={onAddCard}
            />
            }
        </Layout>
    )
}

export default ProfileContainer;
