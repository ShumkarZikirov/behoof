import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import './characteristic.scss'
const Characteristic = () => {
	return (
		<div className='characteristic'>
			<ul className='slider-ul'>
				<li className='color'>Дизайн <span><CloseIcon /></span></li>
				<li className='color'>Портативность <span><CloseIcon /></span></li>
				<li>Камера</li>
				<li>Ответ</li>
				<li>Дисплей</li>
				<li>Батарея</li>
			</ul>
		</div>
	)
}

export default Characteristic
