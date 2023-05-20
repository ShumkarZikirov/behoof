import React from 'react';
import {productInfo} from "../../../arrays/product-info";
import Rating from '@mui/material/Rating';
import Fab from "@mui/material/Fab";
import img2 from "../../../assets/icons/Vector.png";
import img1 from "../../../assets/icons/chart.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ProductRating from "../product-rating/product-rating";
import Button from '@mui/material/Button';
import './product-detail.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function ProductDetail() {
    return (
        <div className={'productDetail'}>
            <div className={'productDetail-main'}>
                    {
                        productInfo.map((elem,index) =>{
                            return(
                                <div key={index} data-aos="fade-up-left" className={'productDetail-main-block'}>
                                    <img className={'img-main'} src={elem.img} alt=""/>
                                    <div className={'detail-info'}>
                                        <div className={'detail-info-top'}>
                                              <div>
                                                  <p className={'detail-osenka'}>{elem.osenka} Оценка экспертов</p>
                                                  <p className={'detail-rating'}><span>{elem.rating}.0</span> <Rating name="read-only" value={elem.rating} readOnly /> <span>{elem.otziv} Отзывов</span></p>
                                              </div>
                                            <div className='buttons'>
                                                <Fab size="small" color="inherit" aria-label="add">
                                                    <img src={img2} alt="" />
                                                </Fab>
                                                <Fab size="small" color="inherit" aria-label="add">
                                                    <img src={img1} alt="" />
                                                </Fab>
                                            </div>
                                        </div>
                                        <div className={'detail-center'}>
                                            <div className={'detail-price'}>
                                                <h1>{elem.title}</h1>
                                                <p><span><ArrowDropDownIcon /> {elem.procent}</span> <h2>{elem.price}</h2></p>
                                            </div>
                                            <div className={'detail-haracter'}>
                                                <img className={'img-main2'} src={elem.img} alt=""/>
                                                <div className={'none'}>
                                                    <p><span>{elem.sim? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC</p>
                                                    <p><span>{elem.display? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>6.1 inches, 1170 x 2532 px Display with Small Notch</p>
                                                    <p><span>{elem.bionic? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>Bionic A15, Hexa Core, 3.22 GHz Processor</p>
                                                    <p><span>{elem.mpcam? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>12 MP + 12 MP Dual Rear & 12 MP Front Camera</p>
                                                </div>
                                                <div>
                                                    <p><span>{elem.ram? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>4 GB RAM, 128 GB inbuilt</p>
                                                    <p><span>{elem.memory? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>Memory Card Not Supported</p>
                                                    <p><span>{elem.mah? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>3240 mAh Battery with Fast Charging</p>
                                                    <p><span>{elem.ios? <CheckIcon/>:<CloseIcon style={{color:'red'}}/>}</span>iOS v15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'detail-right'}>
                                        <div>
                                            <p>Дизайн</p>
                                            <ProductRating number={elem.info.desing} />
                                        </div>
                                        <div>
                                            <p>Батарея</p>
                                            <ProductRating number={elem.info.batar} />
                                        </div>
                                        <div>
                                            <p>Дисплей</p>
                                            <ProductRating number={elem.info.display} />
                                        </div>
                                        <div>
                                            <p>Камера</p>
                                            <ProductRating number={elem.info.camera} />
                                        </div>
                                        <div>
                                            <p>Ответ</p>
                                            <ProductRating number={elem.info.otvet} />
                                        </div>
                                        <div>
                                            <p>Портативность</p>
                                            <ProductRating number={elem.info.port} />
                                        </div>
                                        <Button variant="contained">Перейти к товару</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                <Stack spacing={2} className={'paginations'}>
                    <Pagination count={10} shape="rounded" />

                </Stack>
            </div>
        </div>
    );
}

export default ProductDetail;