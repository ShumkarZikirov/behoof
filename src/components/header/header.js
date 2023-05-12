import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React from 'react'
import heard from '../../assets/icons/Vector.png'
import icon from '../../assets/icons/behoof_logo.png'
import chart from '../../assets/icons/chart.png'
import profil from '../../assets/icons/frame.png'
import search from '../../assets/icons/search-normal.png'
import './header.scss'
const Header = () => {
	const [age, setAge] = React.useState('')
	return (
		<div className='header'>
			<div className='header-logo'>
				<img src={icon} alt="" />
				<h1>Behoof</h1>
				<div>
					<span>Лучшие цены  </span>
					<span>в интернет-магазинах</span>
				</div>
			</div>
			<div className='header-info'>
				<div className='header-info-form'>
					<FormControl className='select' sx={{ m: 0, height: 52, minWidth: 180, backgroundColor: '#FF4D4D', border: 'none', borderRadius: '8px 0 0 8px', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
						<Select
							displayEmpty
							value={age}
							label="Age"
							inputProps={{ 'aria-label': 'Without label' }}
							className='select-text'
							disableUnderline
						>
							<MenuItem value=''>
								Каталог товаров
							</MenuItem>
							<MenuItem>Ten</MenuItem>
							<MenuItem >Twenty</MenuItem>
						</Select>
					</FormControl>
					<form>
						<img src={search} alt="" />
						<input type="text" placeholder='Поиск товаров' />
					</form>
				</div>
				<div className='header-info-btns'>
					<Button className='btn' color='inherit' variant="contained" >
						<img src={heard} alt="" />
					</Button>
					<Button className='btn' color='inherit' variant="contained" >
						<img src={chart} alt="" />
					</Button>
					<Button className='btn' color='inherit' variant="contained" >
						<img src={profil} alt="" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
