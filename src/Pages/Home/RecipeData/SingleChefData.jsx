import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleChefData = ({ data }) => {
    const { id, chefImg, name, TypesOfRecipes, Likes, Experience } = data;
    return (
        <Col md={4} className='mb-3'>
            <Card style={{ width: '18rem' }} className='mx-auto gap-0'>
                <Card.Img variant="top" src={chefImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Experience: {Experience}</Card.Text>
                    <Card.Text>Recipes: {TypesOfRecipes.length}</Card.Text>
                    <Card.Text>Likes: {Likes}</Card.Text>
                    <Link to={`/chefData/${id}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleChefData;