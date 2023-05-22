import React from 'react';
import './product-rating.scss'
function ProductRating({number}) {
    return (
        <div className='rating'>
            <span style={{ backgroundColor: number >= 1 ? '#FF4D4D' : '#ECEEEF'}}></span>
            <span style={{ backgroundColor: number >= 2 ? '#FF4D4D' : '#ECEEEF' }}></span>
            <span style={{ backgroundColor: number >= 3 ? '#FF4D4D' : '#ECEEEF' }}></span>
            <span style={{ backgroundColor: number >= 4 ? '#FF4D4D' : '#ECEEEF' }}></span>
            <span style={{ backgroundColor: number === 5 ? '#FF4D4D' : '#ECEEEF' }}></span>
        </div>
    );
}

export default ProductRating;