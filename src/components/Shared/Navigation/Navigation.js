import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navigation.css'
import logo from '../../utilities/Images/logo.png'

const Navigation = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {user ? <Nav.Link as={Link} to="/myItems">My Items</Nav.Link> : <></>}
                        </Nav>
                        {   user ? <button onClick={handleSignOut} className="btn" style={{backgroundColor: "#89C74A"}}> <Link to="/login" className="text-decoration-none text-light">Log Out</Link></button>:
                            <button className="btn" style={{backgroundColor: "#89C74A"}}> <Link to="/login" className="text-decoration-none text-light">Login</Link></button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;