import React from 'react';
import './info-product.scss'
import {Link} from "react-router-dom";
import InfoImgs from "../../components/info-product/info-imgs/info-imgs";
const InfoProductPage = () => {
    return (
        <div className={'info-product-page'}>
            <h4><Link to={'/'}>Главная</Link>/<Link to={'/phone'}>Смартфоны</Link>/ Apple iPhone 13 Pro Max 256 ГБ серый</h4>
            <div>
                <div>
                    <InfoImgs/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default InfoProductPage;
