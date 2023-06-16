import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import Navbar from '../../common/navbar/Navbar';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userImage, setUserImage] = useState('');

    const handleLoginSuccess = (credentialResponse) => {
        const details = jwt_decode(credentialResponse.credential);
        console.log(details);
        console.log(credentialResponse);
        setLoggedIn(true);
        setUserImage(details.picture);
        localStorage.setItem('isLoggedIn', 'true'); // Store login status
        localStorage.setItem('userImage', details.picture); // Store user image
        // Redirect to the home page or any other desired page
        window.location.href = '/';
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserImage('');
        localStorage.removeItem('isLoggedIn'); // Remove login status
        localStorage.removeItem('userImage'); // Remove user image
    };

    return (
        <div className='main-container'>
            <Navbar loggedIn={loggedIn} userImage={userImage} onLogout={handleLogout} />
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
