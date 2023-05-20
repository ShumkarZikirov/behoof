import { useEffect, useState } from 'react'
import './App.scss'
import BottomNavigate from './components/main-components/bottom-navigate/bottom-navigate'
import Footer from './components/main-components/footer/footer'
import 'swiper/css';
import MainPage from "./pages/main-page/main-page";
import {Route, Routes} from "react-router-dom";
import PhonePage from "./pages/phone-page/phone-page";
import Header from "./components/main-components/header/header";
import ComparisonPage from "./pages/comparison-page/comparison-page";
import InfoProductPage from "./pages/info-product-page/info-product";
import ReviewPage from "./pages/review-page/review-page";
import ErrorPage from "./pages/errror-page/errror-page";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
      AOS.init()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
        </Routes>
      <div className={'footers'}>
        <Footer />
      </div>
      {windowWidth <= 959 ? <BottomNavigate /> : null}
    </div>
  )
}

export default App
