import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';



const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div className="w-50 mx-auto mt-5 bg-light p-5 shadow">
            <h3 className="text-center">Login:</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={() => signInWithEmailAndPassword(email, password)}>
                    Login
                </Button>
                <br />
                <p className="text-dark">Don't Have an Account?
                    <br /><Link to="/register">Please Register</Link></p>
            </Form>
            <button onClick={() => signInWithGoogle()}>Google Sign In</button>
        </div>
    );
};

export default Login;