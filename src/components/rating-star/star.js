import React from 'react';
import './rating-star.scss'
import StarRatings from 'react-star-ratings';
import StarIcon from '@mui/icons-material/Star';
const Star = ({number}) => {
    return (
        <div className={'star'}>
            <div className={'star-max'}>
                <StarRatings
                    rating={number} // initial rating value
                    starRatedColor="#FF4D4D" // color of filled stars
                    starEmptyColor="#C3CAD4" // color of empty stars
                    starHoverColor="yellow" // color of stars on hover
                    starDimension="20px" // size of stars
                    starSpacing="1px" // spacing between stars
                />
            </div>
            <>
                <span className={'star-min'}><StarIcon style={{color:'#FF4D4D'}}/></span>
            </>
        </div>
    );
};

export default Star;
