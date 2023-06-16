// Login.js

import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Navbar from '../../common/navbar/Navbar';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const handleLoginSuccess = (credentialResponse) => {
    const details = jwt_decode(credentialResponse.credential);
    localStorage.setItem('loggedInUser', JSON.stringify(details));
    window.location.href = '/';
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div className='main-container'>
      <Navbar />
      <GoogleOAuthProvider clientId="458684561227-nv9ntmp9abs0d47rg5i9p9qegr691bdn.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess} 
          onError={handleLoginError} 
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
