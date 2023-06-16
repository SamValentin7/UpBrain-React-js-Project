import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Navbar from '../../common/navbar/Navbar';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const handleLoginSuccess = (credentialResponse) => {
    const details = jwt_decode(credentialResponse.credential);
    localStorage.setItem('loggedInUser', JSON.stringify(details));
    window.location.href = '/';
    //console.log(details);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div className='main-container'>
      <Navbar />
      <GoogleOAuthProvider clientId = {import.meta.env.VITE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={handleLoginSuccess} 
          onError={handleLoginError} 
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
