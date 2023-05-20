import Header from "../../components/main-components/header/header";
import BannersHeader from "../../components/main-components/banners-header/banners-header";
import Choice from "../../components/main-components/choice/choice";
import Characteristic from "../../components/main-components/characteristic/characteristic";
import Swiper from "../../components/main-components/swiper/swiper";
import InfoText from "../../components/main-components/info-text/info-text";
import Product from "../../components/main-components/product/product";
import News from "../../components/main-components/news/news";
import  './main.scss'
import Footer from "../../components/main-components/footer/footer";
import {useEffect, useState} from "react";
import BottomNavigate from "../../components/main-components/bottom-navigate/bottom-navigate";
import Slider from "../../components/main-components/slider/slider";
import {Router,Route} from "react-router-dom";
import SearchModal from "../../components/search-components/search-component";
const MainPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={'main-page'}>
                <div className={'main-page-block'}>
                    <BannersHeader/>
                </div>
                <div className={'app-gray'}>
                    <div className={'gray-choice'}>
                        <Choice text={'Лучший выбор'}/>
                        <Characteristic/>
                        {windowWidth <= 959 ? <Slider/>  : <Swiper/>}
                    </div>
                </div>
                <div className={'main-page-block'}>
                    <InfoText/>
                    <Product/>
                    <News link={true}/>
                </div>

        </div>
    );
};

export default MainPage;
