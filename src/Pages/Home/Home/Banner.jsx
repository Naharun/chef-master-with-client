import React from 'react';
import image from '../../../assets/back-back-gastronomy-experts-standing-restaurant-professional-kitchen-while-posing-camera-chefs-wearing-cooking-uniformswhile-standing-gourmet-cuisine-with-arms-crossed_482257-41991.avif';


const Banner = () => {
    return (
        <div className='d-flex align-items-center mx-auto container'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>Welcome to the website</h2>
            </div>
        </div>
    );
};

export default Banner;