import React,{useState} from 'react';
import {productInfo} from "../../../arrays/product-info";
import Rating from "@mui/material/Rating";
import crown from '../../../assets/icons/crown.png'
import RatingInfo from "../rating-info/rating-info";
import reStore from '../../../assets/image/reStore.png'
import diagram from '../../../assets/icons/diagram.png'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
const InfoImgs = () => {
    const [product] = useState(productInfo)
    const [visibleProducts] = useState(product.slice(0, 1));
    return (
        <div>
            {
                visibleProducts.map((elem,index) => {
                    return(
                        <div>
                            <div>
                                <img src={elem.imgMax} alt=""/>
                                <div>
                                    <img src={elem.img1} alt=""/>
                                    <img src={elem.img2} alt=""/>
                                    <img src={elem.img3} alt=""/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1>{elem.title}</h1>
                                    <div>
                                        <p className={'detail-osenka'}>{elem.osenka} Оценка экспертов</p>
                                        <p className={'detail-rating'}><span>{elem.rating}.0</span> <Rating name="read-only" value={elem.rating} readOnly /> <span>{elem.otziv} Отзывов</span></p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>Дизайн</p>
                                        <RatingInfo number={elem.info.desing} />
                                    </div>
                                    <div>
                                        <p>Батарея</p>
                                        <RatingInfo number={elem.info.batar} />
                                    </div>
                                    <div>
                                        <p>Дисплей</p>
                                        <RatingInfo number={elem.info.display} />
                                    </div>
                                    <div>
                                        <p>Камера</p>
                                        <RatingInfo number={elem.info.camera} />
                                    </div>
                                    <div>
                                        <p>Ответ</p>
                                        <RatingInfo number={elem.info.otvet} />
                                    </div>
                                    <div>
                                        <p>Портативность</p>
                                        <RatingInfo number={elem.info.port} />
                                    </div>
                                </div>
                                <div>
                                    <h2><img src={crown} alt=""/> <span>Самый дешевый</span></h2>
                                    <div>
                                        <h3>{elem.price}</h3>
                                        <img src={reStore} alt=""/>
                                    </div>
                                    <h5>Доставка бесплатная</h5>
                                    <div>
                                        <img src={diagram} alt=""/>
                                        <div>
                                            <p>Цена хорошая</p>
                                            <p>Исходя из последних 40 дней, сумма составляет близко к среднему <span>80 000 ₽</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <span><VerticalAlignBottomIcon/></span>
                                        <div></div>
                                    </div>
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
