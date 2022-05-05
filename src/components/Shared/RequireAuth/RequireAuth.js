import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div className="text-center"><Spinner animation="border" variant="success" />;</div>
      }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>;
    }
    return children;
};

export default RequireAuth;