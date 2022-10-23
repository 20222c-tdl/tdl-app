import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
