
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

const Login = () => {


    return (
        <div className='main-container'>
      // For normal outlined button
            <GoogleOAuthProvider clientId="458684561227-nv9ntmp9abs0d47rg5i9p9qegr691bdn.apps.googleusercontent.com">

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details = jwt_decode(credentialResponse.credential);
                        console.log(details)
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default Login;