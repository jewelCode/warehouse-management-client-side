import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FaBeer } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import google from '../../../components/utilities/Images/google.png'


const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    if (error) { errorElement = <div className="text-danger"><p>Error: {error.message}</p></div> }

    if (loading) {
        return <div className="text-center mt-5"><Spinner animation="border" variant="success" />;</div>
      }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
           <div className="text-center">
                <button className="btn bg-info" onClick={() => signInWithGoogle()}><img style={{width: '30px', height: '30px'}} src={google}></img> Sign In With Google</button>
           </div>

        </div>
    );
};

export default GoogleSignIn;