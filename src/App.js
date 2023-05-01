import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import '../src/assets/css/style.css'
import '../node_modules/fontawesome-4.7/css/font-awesome.css';
import '../node_modules/fontawesome-4.7/css/font-awesome.min.css';

import HomeScreen from './pages/HomeScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ProfileUpdateScreen from './pages/ProfileUpdateScreen';
import ForgetPasswordScreen from './pages/ForgetPasswordScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/welcome-screen' element={<WelcomeScreen />}/>
        <Route path='/sign-in' element={<SignInScreen />} />
        <Route path='/sign-up' element={<SignUpScreen />} />
        <Route path='/profile-update' element={<ProfileUpdateScreen />} />
        <Route path='/forget-password' element={<ForgetPasswordScreen />} />
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
