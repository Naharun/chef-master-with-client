import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleChefData = ({ data }) => {
    const { id, chefImg, name, TypesOfRecipes, Likes, Experience } = data;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chefImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Experience: {Experience}</Card.Text>
                    <Card.Text>Recipes: {TypesOfRecipes.length}</Card.Text>
                    <Card.Text>Likes: {Likes}</Card.Text>
                    <Link to={`/chefData/${id}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleChefData;