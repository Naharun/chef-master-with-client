import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;