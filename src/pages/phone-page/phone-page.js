import React from 'react';
import icon from '../../assets/icons/export.png'
import  './phone-page.scss'
import  {Link} from 'react-router-dom'
import PhoneFilter from "../../components/phone-components/phone-filter/phone-filter";
import ProductDetail from "../../components/phone-components/product-detail/product-detail";
import News from "../../components/main-components/news/news";
function PhonePage() {
    return (
        <div className={'phone-page'}>
            <div className={'phone-page-wrapper'}>
                <h4><Link to={'/'}>Главная</Link><span>/</span> Смартфоны</h4>
                <div className={'phone-page-main'}>
                    <h1 className={'title'}>Смартфоны</h1>
                    <p className={'none'}>Все что нужно знать при выборе <button>Смартфона <img src={icon} alt=""/></button></p>
                </div>
                <PhoneFilter/>
                <ProductDetail/>
                <News link={true}/>
            </div>
        </div>
    );
}

export default PhonePage;