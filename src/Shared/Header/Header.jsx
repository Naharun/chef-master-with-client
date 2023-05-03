import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Chef Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='text-black text-decoration-none me-4' to='/'>Home</Link>
                            <Link className='text-black text-decoration-none me-4' to='/blog'>Blog</Link>
                            <Link className='text-black text-decoration-none me-4' to='/signup'>SignUp</Link>
                            <Link className='text-black text-decoration-none me-4' to='/login'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;