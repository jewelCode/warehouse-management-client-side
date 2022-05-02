import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, } from 'react-router-dom';
import auth from '../../../firebase.init';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    return (
        <div className="w-50 mx-auto mt-5 bg-light p-5 shadow">
            <h3 className="text-center">Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" />
                </Form.Group>
                <Button variant="primary"  onClick={() => createUserWithEmailAndPassword(email, password)}>
                    Create Account
                </Button>
                <br /><br />
                <p className="text-dark">Already Have an Account? <Link to="/login">Please Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;