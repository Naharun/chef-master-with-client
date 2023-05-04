import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ data }) => {
    const [disabled, setDisabled] = useState(false);

    const { RecipeName, RecipesImg, rating, Cuisines } = data;

    const handelFavourite = () => {
        setDisabled(true);
        toast.success('Added to Favourite List! ❤️', { autoClose: 1000 })
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} className='mx-auto' >
                <Card.Img style={{ height: '256px' }} className='p-2 rounded rounded-4' variant="top" src={RecipesImg} />
                <Card.Body className=' position-relative fit-content'>
                    <Card.Title>{RecipeName}</Card.Title>
                    <hr />
                    <span>Cooking Method:</span>
                    <br></br>
                    <div>
                        <li className='text-black fw-semibold'>{Cuisines.Boiling}</li>
                        <li className='text-black fw-semibold'>{Cuisines.Smoking}</li>
                        <li className='text-black fw-semibold'>{Cuisines.frying}</li>
                        <li className='text-black fw-semibold'>{Cuisines.Sauteing}</li>
                    </div>
                    <hr />
                    
                    <br />
                </Card.Body>
                <Card.Footer>
                    <small >
                        <div className='d-flex align-items-center'>
                            <div>
                                <Rating className='flex-grow-1'
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                            <span className='flex-grow-1 ms-2'>{rating}</span>
                            <button className='btn btn-dark text-bg-light border' onClick={handelFavourite} disabled={disabled}><FaHeart className='text-danger' /> Add to Fvourite</button>
                            <ToastContainer ></ToastContainer>
                        </div>
                    </small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Cart;