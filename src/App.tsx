import React, { useEffect } from 'react';
import './App.css';
import history from './helpers/history';
import { Route, Routes, Navigate, unstable_HistoryRouter as HistoryRoute } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { IJWT } from 'types/user.types';

import SignupCommunityContainer from './containers/SignupCommunityContainer';
import LoginCommunityContainer from './containers/LoginCommunityContainer';
import LoginUserContainer from './containers/LoginUserContainer';
import SignupUserContainer from './containers/SignupUserContainer';
import ClaimsContainer from 'containers/ClaimsContainer';
import HomeContainer from 'containers/HomeContainer';
import LoginProviderContainer from 'containers/LoginProviderContainer';
import SignupProviderContainer from 'containers/SignupProviderContainer';
import { ClaimsManagementContainer } from 'containers/ClaimsManagementContainer';
import { useDispatch } from 'react-redux';
import { onGetProfileInfoRequested, onGetUserPhotoRequested, userOnInitializeRequested } from 'redux/actions/user.actions';
import ProviderContainer from 'containers/ProviderContainer';
import { getCookie } from 'helpers/cookies';
import MyReservationsContainer from 'containers/MyReservationsContainer';
import ProfileContainer from 'containers/ProfileContainer';
import useTypedSelector from 'hooks/useTypedSelector';
import { onGetPProfileInfoRequested, onGetProviderInfoRequested } from 'redux/actions/providers.actions';
import ServicesContainer from 'containers/ServicesContainer';
import ReviewsContainer from 'containers/ReviewsContainer';
import PlacesManagementContainer from 'containers/PlacesManagementContainer';
import PlacesContainer from 'containers/PlacesContainer';
import PlaceDetailContainer from 'containers/PlaceDetailContainer';
import { onGetCommunityPhotoRequested } from 'redux/actions/community.actions';

function App() {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);

  const token = getCookie('access_token');
  let decodedToken;

  useEffect(() => {
    if (!!token) {
      decodedToken = jwtDecode<IJWT>(token);
      dispatch(onGetProfileInfoRequested(decodedToken.sub));
    }
  }, [dispatch, token])

  useEffect(() => {
    if (user && user.role === "community") {
      dispatch(onGetCommunityPhotoRequested(user.id));
    }
    else if (user && user.role === "user") {
      dispatch(onGetUserPhotoRequested(user.id));
    }
    else if (user && user.role === "provider") {
      dispatch(onGetProviderInfoRequested(user.id));
    }
  }, [user])

  //dispatch(userOnInitializeRequested());

  return (
    <HistoryRoute history={history}>
      <Routes>
        <Route path="/" element={<SignupUserContainer />} />
        <Route path="/signupCommunity" element={<SignupCommunityContainer />} />
        <Route path="/signupProvider" element={<SignupProviderContainer />} />
        <Route path="/loginCommunity" element={<LoginCommunityContainer />} />
        <Route path="/loginUser" element={<LoginUserContainer />} />
        <Route path="/loginProvider" element={<LoginProviderContainer />} />
        <Route path="/claimsManagment" element={<ClaimsManagementContainer />} />
        <Route path="/claims" element={<ClaimsContainer />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/reservations" element={<MyReservationsContainer />} />
        <Route path="/providers/:id" element={<ProviderContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/services" element={<ServicesContainer />} />
        <Route path="/reviews" element={<ReviewsContainer />} />
        <Route path="/placesManagement" element={<PlacesManagementContainer />} />
        <Route path="/places" element={<PlacesContainer />} />
        <Route path="/place/:id" element={<PlaceDetailContainer />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </HistoryRoute>

  );
}

export default App;
