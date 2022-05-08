import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';





const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) { errorElement = <div className="text-danger"><p>Error: {error.message}</p></div> }
    const handleSubmit = async event => {
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('token', data.token)
        navigate(from, { replace: true });
    }
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <div className="text-center"><Spinner animation="border" variant="success" />;</div>
    }

    if (user) {
        
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
                <Button className="border-0" style={{backgroundColor: "#89C74A"}} onClick={handleSubmit}>
                    Login
                </Button>
                <br />
                <p className="text-dark">Don't Have an Account?
                    <br /><Link to="/register">Please Register</Link></p>
                <Link to="/" onClick={async () => {
                    sendPasswordResetEmail(email);
                    toast('Sent email');
                }}>Reset Password</Link>
            </Form>
            {errorElement}
            <GoogleSignIn></GoogleSignIn>
            
        </div>
    );
};

export default Login;