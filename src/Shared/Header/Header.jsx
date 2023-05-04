import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Layout/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Chef Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link className='text-black text-decoration-none me-4' to='/'>Home</Link>
                            <Link className='text-black text-decoration-none me-4' to='/blog'>Blog</Link>
                            {user ? <Button className='text-black fs-5' variant="outline-dark" onClick={handleLogOut}>Sign Out</Button> : <Link className=' fs-5  rounded-3 p-2 text-black text-decoration-none mx-3' to='/signup'>SignUp</Link>}
                            {user ? <img style={{ height: '40px', }} className='rounded-5 ' src={user.photoURL} alt="" /> : <Link className=' fs-5 rounded-3 p-2 text-black text-decoration-none me-3' to='/login'>Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;