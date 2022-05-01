import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Login = () => {
    
    return (
        <div className="w-50 mx-auto mt-5 bg-light p-5 shadow">
            <h3 className="text-center">Login</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <p className="text-dark">Don't Have an Account? 
                    <br /><Link to="/register">Please Register</Link></p>
                </Form>
        </div>
    );
};

export default Login;