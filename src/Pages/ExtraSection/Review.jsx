import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaComment, FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <div>
            <Container className='mt-5 mb-2'>
                <h1 className='fs-1 fw-bold text-center'> Food Review's </h1>
                <hr className='w-75 mx-auto' />
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', height: '22rem' }} className='mt-3 border-0 shadow-lg bg-opacity-10 bg-dark'>
                            <Card.Body>
                                <h5 className='text-start text-black fw-semibold mb-4 mt-2'><FaStar className='text-warning me-2 ' /> Kuddus Ali</h5>
                                <Card.Text className='text-dark fw-semibold text-muted'>
                                I recently had the pleasure of dining at a new restaurant in town and I must say, I was thoroughly impressed! The atmosphere was cozy and inviting, with dim lighting and tasteful decor. But what really stole the show was the food. Every dish was a work of art, beautifully presented and bursting with flavor. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '22rem' }} className='mt-3 border-0 shadow-lg bg-opacity-10 bg-dark'>
                            <Card.Body>
                                <h5 className='text-start text-black fw-semibold mb-4 mt-2'><FaStar className='text-warning me-2 ' /> Regan Mahmud</h5>
                                <Card.Text className='text-dark fw-semibold text-muted'>
                                I recently had the pleasure of dining at a new restaurant in town and I must say, I was thoroughly impressed! The atmosphere was cozy and inviting, with dim lighting and tasteful decor. But what really stole the show was the food. Every dish was a work of art, beautifully presented and bursting with flavor. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '22rem' }} className='mt-3 border-0 shadow-lg bg-opacity-10 bg-dark'>
                            <Card.Body>
                                <h5 className='text-start text-black fw-semibold mb-4 mt-2'><FaStar className='text-warning me-2 ' /> Rina Ali</h5>
                                <Card.Text className='text-dark fw-semibold text-muted'>
                                I recently had the pleasure of dining at a new restaurant in town and I must say, I was thoroughly impressed! The atmosphere was cozy and inviting, with dim lighting and tasteful decor. But what really stole the show was the food. Every dish was a work of art, beautifully presented and bursting with flavor. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '22rem' }} className='mt-3 border-0 shadow-lg bg-opacity-10 bg-dark'>
                            <Card.Body>
                                <h5 className='text-start text-black fw-semibold mb-4 mt-2'><FaStar className='text-warning me-2 ' /> Siam Ahammed</h5>
                                <Card.Text className='text-dark fw-semibold text-muted'>
                                I recently had the pleasure of dining at a new restaurant in town and I must say, I was thoroughly impressed! The atmosphere was cozy and inviting, with dim lighting and tasteful decor. But what really stole the show was the food. Every dish was a work of art, beautifully presented and bursting with flavor. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;