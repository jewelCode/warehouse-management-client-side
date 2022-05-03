import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    if (error) {errorElement = <div className="text-danger"><p>Error: {error.message}</p></div>}
    
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}>Google Sign In</button>
        </div>
    );
};

export default GoogleSignIn;