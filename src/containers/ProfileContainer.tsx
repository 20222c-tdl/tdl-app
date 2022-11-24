import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchNameRequested } from 'redux/actions/providers.actions';
import Profile from 'views/Profile/Profile';
import { ICard } from 'views/Profile/types';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';


const ProfileContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);

    const cards = [{
        id: 3,
        number: "314331139864",
        name: "Rocio",
        expiry: "17/12/26",
        cvc: "123",
    }]

    const onEditProfileClick = (formData: any) => {
        //dispatch(onUpdateProfileRequested(formData, data.id));
    }

    const onEditPassClick = (formData: any) => {
        //dispatch(onUpdatePasswordRequested(formData, data.id));
    }

    const onRemoveCard = (cardId: number) => {
        //dispatch(onDeleteCardRequested(data.id, cardId));
    }

    const onAddCard = (formData: ICard) => {
        //dispatch(onAddNewCardRequested(data.id, formData));
    }

    const onSearchNav = (searchName: string) => {
        dispatch(onSearchNameRequested(searchName))
    }

    return (
        <Layout name={user && user.firstName}
            onSearchNav={onSearchNav}>
            <Profile
                user={user}
                onEditProfileClick={onEditProfileClick}
                onEditPassClick={onEditPassClick}
                cards={cards}
                onRemoveCard={onRemoveCard}
                onAddCard={onAddCard}
            />
        </Layout>
    )
}

export default ProfileContainer;
