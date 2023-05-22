import React from 'react';
import img from '../../../assets/image/sity.png'
import icon from '../../../assets/news/Chart.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../eldarado/eldarado.scss'
const Sity = () => {
    return (
        <div className={'magazine'}>
            <div className={'magazine-top'}>
                <h1>81 999 ₽</h1>
                <img src={img} alt=""/>
            </div>
            <p className={'delivery'}>Доставка включена в стоимость</p>
            <div className={'magazine-img'}>
                <img src={icon} alt=""/>
                <button>Перейти в магазин <span><ArrowForwardIosIcon/></span></button>
            </div>
        </div>
    );
};

export default Sity;
