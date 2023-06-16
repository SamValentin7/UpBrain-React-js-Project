import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Popup from 'reactjs-popup';
import jwt_decode from 'jwt-decode';

const Login = () => {
    const handleLoginSuccess = (credentialResponse) => {
        const details = jwt_decode(credentialResponse.credential);
        localStorage.setItem('loggedInUser', JSON.stringify(details));
        window.location.reload();
        //console.log(details);
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <Popup
            trigger={
                <button className="login-btn">
                    Log In
                </button>
            }
            modal
            nested
        >
            {(close) => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="content">
                        <h3>Confirm Log In</h3>
                        <p>Join us and log in for an amazing experience!</p>
                    </div>
                    <div className='main-container'>
                        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={handleLoginError}
                            />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            )}
        </Popup>

    );
};

export default Login;
