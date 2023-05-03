import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Cart = ({ data }) => {
    const { recipe, recipeImage, ingredients, rating, cooking_method } = data;

    return (
        <div>
            <Card style={{ width: '18rem' }, { height: '780px' }} >
                <Card.Img style={{ height: '256px' }} className='p-2 rounded rounded-4' variant="top" src={recipeImage} />
                <Card.Body className=' position-relative fit-content'>
                    <Card.Title>{recipe}</Card.Title>
                    <hr />
                    <span>Cooking Method:</span>
                    <br></br>
                    <div>
                        <li className='text-black fw-semibold'>{cooking_method.Boiling}</li>
                        <li className='text-black fw-semibold'>{cooking_method.Smoking}</li>
                        <li className='text-black fw-semibold'>{cooking_method.Frying}</li>
                        <li className='text-black fw-semibold'>{cooking_method.Sauteing}</li>
                    </div>
                    <hr />
                    <span>Ingredients:</span>
                    <Card.Text className='fw-semibold'>{ingredients}</Card.Text>
                    <br />
                </Card.Body>
                <Card.Footer>
                    <small>
                        <div className='d-flex'>
                            <Rating className='flex-grow-1'
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar/>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <span>{rating}</span>
                        </div>
                    </small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Cart;