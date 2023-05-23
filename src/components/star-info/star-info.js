import React from 'react';
import StarRatings from 'react-star-ratings';
const StarInfo = ({number}) => {
    return (
            <div >
                <StarRatings
                    rating={number} // initial rating value
                    starRatedColor="#FF4D4D" // color of filled stars
                    starEmptyColor="#C3CAD4" // color of empty stars
                    starHoverColor="yellow" // color of stars on hover
                    starDimension="20px" // size of stars
                    starSpacing="1px" // spacing between stars
                />
            </div>
    );
};

export default StarInfo;