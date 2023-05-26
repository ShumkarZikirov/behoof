import BottomNavigation from '@mui/material/BottomNavigation'
import React,{useState} from 'react'
import img1 from '../../../assets/icons/1.png'
import img2 from '../../../assets/icons/2.png'
import img3 from '../../../assets/icons/3.png'
import img4 from '../../../assets/icons/4.png'
import img5 from '../../../assets/icons/5.png'
import './bottom-navigation.scss'
import Badge from '@mui/material/Badge';
import {Link, useLocation} from "react-router-dom";

const BottomNavigate = () => {
    const [value, setValue] = useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const location = useLocation()
    return (
        <BottomNavigation sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            zIndex: 5000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }} className={'bottom-navigate'} value={value} onChange={handleChange}>
            <Link to='/'>
                <img src={img1}/>
                <p style={{color: location.pathname === '/' ? '#FF4D4D' : '#7E8794'}}>Главная</p>
            </Link>
            <Link to={'/error-page'}>
                <img src={img2}/>
                <p style={{color: location.pathname === '/catalog' ? '#FF4D4D' : '#7E8794'}}>Каталог</p>
            </Link>
            <Link to={'/error-page'}>
                <div  className={'show-number'}>
                    <img className={'izbr'} src={img3}/>
                    <span>1</span>
                </div>
                <p style={{color: location.pathname === '/favourites' ? '#FF4D4D' : '#7E8794'}}>Избранное</p>
            </Link>
            <Link to={'/comparison'}>
                <img src={img4}/>
                <p style={{color: location.pathname === '/comparison' ? '#FF4D4D' : '#7E8794'}}>Сравнения</p>
            </Link>
            <Link to={'/error-page'}>
                <img src={img5}/>
                <p style={{color: location.pathname === '/profile' ? '#FF4D4D' : '#7E8794'}}>Профиль</p>
            </Link>
        </BottomNavigation>
    )
}
export default BottomNavigate