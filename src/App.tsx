import React from 'react';
import './App.css';
import history from './helpers/history';
import { Route, Routes, Navigate, unstable_HistoryRouter as HistoryRoute } from 'react-router-dom';
import SignupCommunityContainer from './containers/SignupCommunityContainer';
import LoginCommunityContainer from './containers/LoginCommunityContainer';
import LoginUserContainer from './containers/LoginUserContainer';
import SignupUserContainer from './containers/SignupUserContainer';

function App() {
  return (
    <HistoryRoute history={history}>
      <Routes>
        <Route path="/" element={<SignupCommunityContainer />} />
        <Route path="/signupUser" element={<SignupUserContainer />} />
        <Route path="/loginCommunity" element={<LoginCommunityContainer />} />
        <Route path="/loginUser" element={<LoginUserContainer />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </HistoryRoute>

  );
}

export default App;
