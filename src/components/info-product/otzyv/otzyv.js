import React from 'react';
import {otzyv} from "../../../arrays/otzyv";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import './otzyv.scss'
import Star from "../../rating-star/star";
import StarInfo from "../../star-info/star-info";
const Otzyv = () => {
    return (
        <div className={'otzyv'}>
            <h1>Отзывы</h1>
            <div className={'otzyv-main'}>
                {
                    otzyv.map((elem,index) => {
                        return(
                            <div key={index} className={'otzyv-main-block'}>
                                <div className={'otzyv-top'}>
                                    <img src={elem.avatar} alt=""/>
                                    <div className={'otzyv-top-main'}>
                                        <p className={'name'}>{elem.name}</p>
                                        <p className={'detail-rating'}><StarInfo number={elem.rating}/>
                                        <span>{elem.date}</span></p>
                                    </div>
                                </div>
                                <h2>{elem.title}</h2>
                                <p>{elem.text}</p>
                            </div>
                        )
                    })
                }
            </div>
           <div className={'btn-show'}>
               <Button  color={'inherit'} variant="contained">Показать еще</Button>
           </div>
        </div>
    );
};

export default Otzyv;
