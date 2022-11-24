import React from 'react';
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
import { onGetProfileInfoRequested, userOnInitializeRequested } from 'redux/actions/user.actions';
import ProviderContainer from 'containers/ProviderContainer';
import { getCookie } from 'helpers/cookies';
import MyReservationsContainer from 'containers/MyReservationsContainer';
import ProfileContainer from 'containers/ProfileContainer';

function App() {

  const dispatch = useDispatch();
  //dispatch(userOnInitializeRequested());

  const token = getCookie('access_token');
  let decodedToken;

  if (token) {
    decodedToken = jwtDecode<IJWT>(token);
    dispatch(onGetProfileInfoRequested(decodedToken.sub));

  }

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
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </HistoryRoute>

  );
}

export default App;
