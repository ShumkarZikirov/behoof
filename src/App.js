import { useEffect, useState } from 'react'
import './App.scss'
import BannersHeader from './components/banners-header/banners-header'
import BottomNavigate from './components/bottom-navigate/bottom-navigate'
import Choice from './components/choice/choice'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import InfoText from './components/info-text/info-text'
import News from './components/news/news'
import Product from './components/product/product'
import Slider from './components/slider/slider'
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <div className='header-app'>
        <Header />
        <BannersHeader />
      </div>
      <div className='app-gray'>
        <div className='gray-choice'>
          <Choice />
          <Slider/>
        </div>
      </div>
      <InfoText />
      <Product />
      <News />
      <Footer />
      {windowWidth <= 500 ? <BottomNavigate /> : null}
    </div>
  )
}

export default App
