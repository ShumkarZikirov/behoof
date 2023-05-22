import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {comparison} from "../../../arrays/comparison";
import img2 from "../../../assets/icons/Vector.png";
import Fab from "@mui/material/Fab";
import './list-phone.scss'
import icon from '../../../assets/icons/trash.png'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ListPhone({
                       visibleProducts,
                       handleNextProduct,
                       handlePreviousProduct,
                       width,
                       handlePreviousProductMin,
                       handleNextProductMin
                   }) {

    return (
        <div className={'listPhone'}>
            <div className={'listPhone-top'}>
                <button className={'smart'}>Смартфоны 2 <span><CloseIcon/></span></button>
                <button>Ноутбуки 2</button>
            </div>
            <div className={'listPhone-block'}>
                {width < 959 ? null :
                    <Fab className={'btn-pagin btn-left'} onClick={handlePreviousProduct} size="medium"
                         color="secondary" aria-label="add">
                        <ArrowBackIosIcon/>
                    </Fab>}
                {
                    visibleProducts.map((elem, index) => {
                        return (
                            <div key={index} className={'listPhone-main'}>
                                <div className={'listPhone-img'}>
                                    <img className={'img-main'} src={elem.img} alt=""/>
                                    <Fab className={'delete-btn'} size="small" color="inherit" aria-label="add">
                                        <img src={icon} alt=""/>
                                    </Fab>
                                </div>
                                <div className={'listPhone-text'}>
                                    <p>{elem.name}</p>
                                    <h1>{elem.title}</h1>
                                    <div className={'bottom-info'}>
                                        <div>
                                            <p>Цена</p>
                                            <h4 className={'price-bottom'}>{elem.price}</h4>
                                        </div>
                                        <Fab size="small" color="inherit" aria-label="add">
                                            <img src={img2} alt=""/>
                                        </Fab>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                {
                    comparison.length < 4 && width > 959 ?
                        <div className={'listPhone-main add-mobile'} style={{border: 'none', alignItems: 'center'}}>
                            <Button variant="contained">Добавить товар</Button>
                        </div> : null
                }
                {width < 959 ? null :
                    <Fab size="medium" onClick={handleNextProduct} className={'btn-pagin btn-right'} color="secondary"
                         aria-label="add">
                        <ArrowForwardIosIcon/>
                    </Fab>}
            </div>

            <div className={'add-comparison'}>
                <div>
                    <Button onClick={handlePreviousProductMin} variant={'text'}><span><ArrowBackIcon/></span> 1 из
                        3 <span><ArrowForwardIcon/></span></Button>
                    <Button onClick={handleNextProductMin}><span><ArrowBackIcon/></span> 2 из
                        3 <span><ArrowForwardIcon/></span></Button>
                </div>
                <Button>Добавить товар</Button>
            </div>
        </div>
    );
}

export default ListPhone;