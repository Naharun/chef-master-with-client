import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaArrowRight, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='text-center bg-lightblue p-4'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className='mt-2 mt-lg-0 text-start'>
                            <h4>About Us</h4>
                            <p>This Should Be Used To Tell A Story And Include Any Testimonials You Might Have About Your Product Or Service For Your Clients</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='mt-2 mt-lg-0 d-flex text-start flex-column'>
                            <h4>Quick Links</h4>
                            <Link className='text-black' to='/'>Home</Link>
                            <Link className='text-black' to='/blog'>Blog</Link>
                            <Link className='text-black'>Contact</Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='mt-2 mt-lg-0 d-flex flex-column text-start'>
                            <h4>Help</h4>
                            <Link className='text-black'>About Us</Link>
                            <Link className='text-black'>Terms & Conditions</Link>
                            <Link className='text-black'>Help</Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='text-start mt-2 mt-lg-0'>
                            <h4>Newsletter</h4>
                            <p>Subscribe With Email And Loads Of News Will Be Sent To You</p>
                            <div>
                                <input type="text" />
                                <button><FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <small>copyright&copy; {new Date().getFullYear()}<h2>ChefMaster</h2> All Rights Reserved</small>
        </footer>
    );
};

export default Footer;