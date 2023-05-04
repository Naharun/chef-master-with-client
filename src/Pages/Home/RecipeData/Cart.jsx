import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Cart = ({ data }) => {
    const { RecipeName,RecipesImg, rating, Cuisines } = data;

    return (
        <div>
            <Card style={{ width: '18rem' }, { height: '780px' }} >
                <Card.Img style={{ height: '256px' }} className='p-2 rounded rounded-4' variant="top" src={RecipesImg} />
                <Card.Body className=' position-relative fit-content'>
                    <Card.Title>{RecipeName}</Card.Title>
                    <hr />
                    <span>Cooking Method:</span>
                    <br></br>
                    <div>
                        <li className='text-black fw-semibold'>{Cuisines}</li>
                        <li className='text-black fw-semibold'>{Cuisines}</li>
                        <li className='text-black fw-semibold'>{Cuisines}</li>
                        <li className='text-black fw-semibold'>{Cuisines}</li>
                    </div>
                    <hr />
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