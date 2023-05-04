import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const RecipeData = () => {
    const recipeData = useLoaderData();
    const {chefImg, name, TypesOfRecipes, Likes, About, Experience} = recipeData;
    return (
        <Container className='shadow-lg p-3'>
            <div className='d-md-flex gap-3 align-items-center mx-auto mt-2 mt-lg-5'>
                <div>
                    <img className='container rounded rounded-4' src={chefImg} alt="" />
                </div>
                <div className='container'>
                    <p>Name: <span className='fs-3 fw-bold'>{name}</span></p>
                    <span>About:</span>
                    <p className='opacity-75 fw-semibold'>{About}</p>
                    <p>Likes: {Likes}</p>
                    <p>Number of Recipe: {TypesOfRecipes.length}</p>
                    <p>Experience: <span>{Experience}</span></p>
                </div>
            </div>
            <p className='my-3 ps-3 fs-2 fw-bold'>Recipes:</p>
            <div className='d-lg-flex gap-3'>
                {
                    TypesOfRecipes.map(data => <Cart
                    key={data.id}
                    data={data}
                    ></Cart>)
                }
            </div>
        </Container>
    );
};

export default RecipeData;