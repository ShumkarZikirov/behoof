import {useEffect, useState} from 'react'
import './App.scss'
import BottomNavigate from './components/main-components/bottom-navigate/bottom-navigate'
import Footer from './components/main-components/footer/footer'
import 'swiper/css';
import MainPage from "./pages/main-page/main-page";
import {Route, Routes, useLocation} from "react-router-dom";
import PhonePage from "./pages/phone-page/phone-page";
import Header from "./components/main-components/header/header";
import ComparisonPage from "./pages/comparison-page/comparison-page";
import InfoProductPage from "./pages/info-product-page/info-product";
import ReviewPage from "./pages/review-page/review-page";
import ErrorPage from "./pages/errror-page/errror-page";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Scroll from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IsError from "./pages/page-404/isError";

function App() {
    const location = useLocation()
    const {pathname} = useLocation();
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const scroll = Scroll.animateScroll;
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        AOS.init()
        return () => window.removeEventListener('resize', handleResize)
    }, [pathname])
    if (location.pathname === '/error-page') {
        toast.error('Ошибка', {
            autoClose: 3000,
            hideProgressBar: true,
            progress: undefined,
        })
    }
    useEffect(() => {
        scroll.scrollTo(0, 0)
    }, [pathname]);
    useEffect(() => {
        const handleOffline = () => {
            setIsOnline(false);
        };

        const handleOnline = () => {
            setIsOnline(true);
        };

        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, []);
    if (!isOnline) {
        return <ErrorPage />;
    }
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/phone'} element={<PhonePage/>}/>
                <Route path={'/comparison'} element={<ComparisonPage/>}/>
                <Route path={'/info-product'} element={<InfoProductPage/>}/>
                <Route path={'/review'} element={<ReviewPage/>}/>
                <Route path={'/error-page'} element={<ErrorPage/>}/>
                <Route path={'/error'} element={<IsError/>}/>
            </Routes>
            <div className={'footers'}>
                <Footer/>
            </div>
            {windowWidth <= 959 ? <BottomNavigate/> : null}
            <ToastContainer position={'top-right'} hideProgressBar={false} newestOnTop={false}
                            rtl={false}
                            style={{
                                height: '30px'
                            }}
            />
        </div>
    )
}

export default App
