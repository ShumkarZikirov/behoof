import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Button from '@mui/material/Button'
import React from 'react'
import img1 from '../../../assets/image/Banner-Normal.jpg'
import img2 from '../../../assets/image/Banner-Small.png'
import './banners-header.scss'
const BannersHeader = () => {
	return (
		<div className='banner'>
			<div className='banner-left'>
				<div>
					<p><span>1.8 млн</span> товаров в <span>2272</span> магазинах найди, сравни, выбирай!</p>
					<Button color='error' variant="contained">Перейти к категориям <span><KeyboardArrowRightIcon /></span></Button>
				</div>
				<img src={img1} />
			</div>
			<div className='banner-right'>
				<div>
					<p><span>Топ-10</span> смартфонов 2023 года</p>
					<Button color='error' variant="contained">Смотреть <span><KeyboardArrowRightIcon /></span></Button>
				</div>
				<img src={img2} alt="" />

			</div>
		</div>
	)
}

export default BannersHeader
