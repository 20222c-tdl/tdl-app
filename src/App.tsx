import React from 'react';
import './App.css';
import history from './helpers/history';
import { Route, Routes, Navigate, unstable_HistoryRouter as HistoryRoute } from 'react-router-dom';
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
import { userOnInitializeRequested } from 'redux/actions/user.actions';

function App() {

  const dispatch = useDispatch();
  dispatch(userOnInitializeRequested());

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


        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </HistoryRoute>

  );
}

export default App;
