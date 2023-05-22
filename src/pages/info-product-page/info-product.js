import React,{useState,useEffect,useLayoutEffect} from 'react';
import './info-product.scss'
import {Link} from "react-router-dom";
import InfoImgs from "../../components/info-product/info-imgs/info-imgs";
import InfoCharacteristic from "../../components/info-product/info-characteristic/info-characteristic";
import Description from "../../components/info-product/description/description";
import Graphic from "../../components/info-product/graphic/graphic";
import News from "../../components/main-components/news/news";
import {productInfo} from "../../arrays/product-info";
import Otzyv from "../../components/info-product/otzyv/otzyv";

const InfoProductPage = () => {
    const [product] = useState(productInfo)
    const [visibleProducts, setVisibleProducts] = useState(product.slice(0, 1));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [width,setWidth] = useState(0)
    useLayoutEffect(() => {

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setWidth(windowWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [product]);
    const handlePreviousProduct = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            setVisibleProducts(product.slice(prevIndex, prevIndex + 1));
        }
    };

    const handleNextProduct = () => {
        if (currentIndex + 4 < product.length) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setVisibleProducts(product.slice(nextIndex, nextIndex + 1));
        }
    };


    return (
        <div className={'info-product-page'}>
            <h4><Link to={'/'}>Главная</Link>/<Link to={'/phone'}>Смартфоны</Link>/ Apple iPhone 13 Pro Max 256 ГБ серый</h4>
            <div className={'info-product-page'}>
                <div>
                    <InfoImgs width={width} handlePreviousProduct={handlePreviousProduct}  handleNextProduct={handleNextProduct} visibleProducts={visibleProducts}/>
                </div>
                {
                    width <959 ? <div className={'info-product-page-flex'}>
                        <div className={'flex-left'}>
                            <InfoCharacteristic visibleProducts={visibleProducts}/>
                        </div>
                        <Graphic width={width}/>
                        <Description/>
                    </div>:<div className={'info-product-page-flex'}>
                        <div className={'flex-left'}>
                            <InfoCharacteristic visibleProducts={visibleProducts}/>
                            <Description />
                        </div>
                        <Graphic width={width}/>
                    </div>
                }
                <News link={true}/>
                <Otzyv/>
            </div>
        </div>
    );
};

export default InfoProductPage;
