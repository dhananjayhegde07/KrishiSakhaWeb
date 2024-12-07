import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router,Route, Routes } from 'react-router-dom';
import Service from './components/Services';

import UserLoginPage from './users/Login';
import SignUp from './users/SignUp';
import OTPVerification from './users/OtpScreen';
import HomePage from './users/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UserLoginPage/>}></Route>
            <Route path='/service' element={<Service></Service>}/>
            <Route path='/register' element={<SignUp></SignUp>}/>
            <Route path='/otp' element={<OTPVerification></OTPVerification>}/>
            <Route path='/home' element ={<HomePage></HomePage>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
