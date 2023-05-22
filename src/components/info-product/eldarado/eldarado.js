import React from 'react';
import img from '../../../assets/image/eldara.png'
import icon from '../../../assets/newImage/Chart.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './eldarado.scss'
const Eldarado = () => {
    return (
        <div className={'magazine'}>
            <div className={'magazine-top'}>
                <h1>83 999 ₽</h1>
                <img src={img} alt=""/>
            </div>
            <p>Доставка бесплатная</p>
            <div className={'magazine-img'}>
                <img src={icon} alt=""/>
                <button>Перейти в магазин <span><ArrowForwardIosIcon/></span></button>
            </div>
        </div>
    );
};

export default Eldarado;
