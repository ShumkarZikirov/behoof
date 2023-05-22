import React, {useState} from 'react';
import {productInfo} from "../../../arrays/product-info";
import Rating from "@mui/material/Rating";
import crown from '../../../assets/icons/crown.png'
import RatingInfo from "../rating-info/rating-info";
import reStore from '../../../assets/image/reStore.png'
import diagram from '../../../assets/icons/diagram.png'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import icon1 from '../../../assets/image/chart.png'
import icon2 from '../../../assets/image/Vector.png'
import Button from '@mui/material/Button';
import './info-imgs.scss'
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const InfoImgs = ({width, handlePreviousProduct, handleNextProduct, visibleProducts}) => {
    return (
        <div className={'info-product'}>
            {
                visibleProducts.map((elem, index) => {
                    return (
                        <div key={index} className={'info-product-main'}>
                            <div className={'info-product-main-imgs'}>
                                    <div className={'btn-arrows'}>
                                        <Fab className={'btn-pagin btn-left'} onClick={handlePreviousProduct} size="medium"
                                             color="inherit" aria-label="add">
                                            <ArrowBackIosIcon/>
                                        </Fab>

                                        <Fab size="medium" onClick={handleNextProduct} className={'btn-pagin btn-right'} color="inherit"
                                             aria-label="add">
                                            <ArrowForwardIosIcon/>
                                        </Fab>
                                    </div>

                                <img className={'imgMax'} src={elem.imgMax} alt=""/>
                                <div>
                                    <img src={elem.img1} alt=""/>
                                    <img src={elem.img2} alt=""/>
                                    <img src={elem.img3} alt=""/>
                                </div>
                            </div>
                            <div className={'info-product-main-right'}>
                                <div className={'info-title'}>
                                    <h1>{elem.title}</h1>
                                    <div>
                                        <p className={'detail-osenka'}>{elem.osenka} Оценка экспертов</p>
                                        <p className={'detail-rating'}><span>{elem.rating}.0</span> <Rating
                                            name="read-only" value={elem.rating} readOnly/>
                                            <span>{elem.otziv} Отзывов</span></p>
                                    </div>
                                </div>
                                <div className={'info-rating'}>
                                    <div>
                                        <p>Дизайн</p>
                                        <RatingInfo number={elem.info.desing}/>
                                    </div>
                                    <div>
                                        <p>Батарея</p>
                                        <RatingInfo number={elem.info.batar}/>
                                    </div>
                                    <div>
                                        <p>Дисплей</p>
                                        <RatingInfo number={elem.info.display}/>
                                    </div>
                                    <div>
                                        <p>Камера</p>
                                        <RatingInfo number={elem.info.camera}/>
                                    </div>
                                    <div>
                                        <p>Ответ</p>
                                        <RatingInfo number={elem.info.otvet}/>
                                    </div>
                                    <div>
                                        <p>Портативность</p>
                                        <RatingInfo number={elem.info.port}/>
                                    </div>
                                </div>
                                <div className={'info-price-block'}>
                                    <h2><img src={crown} alt=""/> <span>Самый дешевый</span></h2>
                                    <div className={'price-reStore'}>
                                        <h3>{elem.price}</h3>
                                        <img src={reStore} alt=""/>
                                    </div>
                                    <h5>Доставка бесплатная</h5>
                                    <div className={'diagram'}>
                                        <div className={'diagram-img'}>
                                            <img src={diagram} alt=""/>
                                        </div>
                                        <div className={'diagram-text'}>
                                            <p className={'diagram-text-price'}>Цена хорошая</p>
                                            <p className={'diagram-text-info'}>Исходя из последних 40 дней, сумма
                                                составляет близко к среднему <span>80 000 ₽</span></p>
                                        </div>
                                    </div>
                                    <div className={'price-gradient'}>
                                        <div className={'price-gradient-span'}>
                                            <span className={'span1'}></span>
                                            <span className={'span2'}></span>
                                        </div>
                                        <div className={'price-gradient-color'}></div>
                                    </div>
                                </div>
                                <div className={'colors-block'}>
                                    <h1>Цвет:</h1>
                                    <ul className={'colors-block-ul'}>
                                        <li><span style={{backgroundColor: elem.colors.white}}></span></li>
                                        <li><span style={{backgroundColor: elem.colors.yellow}}></span></li>
                                        <li><span style={{backgroundColor: elem.colors.red}}></span></li>
                                        <li><span style={{backgroundColor: elem.colors.black}}></span></li>
                                        <li><span style={{backgroundColor: elem.colors.green}}></span></li>
                                        <li><span style={{backgroundColor: elem.colors.blue}}></span></li>
                                        <li><span style={{backgroundColor: elem.colors.orange}}></span></li>
                                    </ul>
                                </div>
                                <div className={'memories-block'}>
                                    <h1>Память:</h1>
                                    <div className={'memories-block-btns'}>
                                        <button>{elem.memores.ram1}</button>
                                        <button>{elem.memores.ram2}</button>
                                        <button>{elem.memores.ram3}</button>
                                    </div>
                                </div>
                                <div className={'buttons-block'}>
                                    <Button className={'buttons-block-btn1'} color={'error'} variant="contained"><img
                                        src={icon1} alt=""/>Сравнить</Button>
                                    <Button className={'buttons-block-btn2'} color={'inherit'} variant="contained"><img
                                        src={icon2} alt=""/>В избранное</Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default InfoImgs;
