import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleChefData = ({ data }) => {
    const { id, chefPictures, chefName, numberOfRecipes, like, description, YearsOfExperience } = data;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chefPictures} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>Experience: {YearsOfExperience}</Card.Text>
                    <Card.Text>Recipes: {numberOfRecipes.length}</Card.Text>
                    <Card.Text>Likes: {like}</Card.Text>
                    <Link to={`/recipeData/${id}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleChefData;