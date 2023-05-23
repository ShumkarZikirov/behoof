import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, {useEffect} from 'react'
import heard from '../../../assets/icons/Vector.png'
import icon from '../../../assets/icons/behoof_logo.png'
import chart from '../../../assets/icons/chart.png'
import profil from '../../../assets/icons/frame.png'
import search from '../../../assets/icons/search-normal.png'
import './header.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import  {Link,useLocation,useNavigate} from 'react-router-dom'
import  {useState} from "react";
import {newProduct} from "../../../arrays/new";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Fab from "@mui/material/Fab";
import img2 from "../../../assets/icons/Vector.png";
import img1 from "../../../assets/icons/chart.png";
import {news} from "../../../arrays/news";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Header = () => {
	const [age] = React.useState('')
	const [searchTerm, setSearchTerm] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const location = useLocation()
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	const handleInputChange = (event) => {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		const suggestions = getSuggestions(searchTerm);
		setSuggestions(suggestions);
	};
	const getSuggestions = (searchTerm) => {
		return newProduct.filter((suggestion) =>
			suggestion.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<div className='header'>
			<Link to={'/'} className='header-logo'>
				<img src={icon} alt="" />
				<h1>Behoof</h1>
				<div>
					<span>Лучшие цены  </span>
					<span>в интернет-магазинах</span>
				</div>
			</Link>
			<div className='header-info'>
				<div className='header-info-form'>
					<FormControl className='select' sx={{ m: 0, height: 52, minWidth: 180, backgroundColor: '#FF4D4D', border: 'none', borderRadius: '8px 0 0 8px', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
						<Select
							displayEmpty
							value={age}
							label="Age"
							inputProps={{ 'aria-label': 'Without label' }}
							className='select-text'

						>
							<MenuItem className={'menuItem'} value=''>
								Каталог товаров
							</MenuItem>
							<MenuItem  className={'menuItem'}>
								<Link style={{color:'black',textDecoration:'none'}} to={'/phone'}>Смартфоны</Link>
							</MenuItem>
							<MenuItem className={'menuItem'} >
								<Link style={{color:'black',textDecoration:'none'}} to={'/error-page'}>Teteras electricas</Link>
							</MenuItem>
							<MenuItem className={'menuItem'}>
								<Link style={{color:'black',textDecoration:'none'}} to={'/error-page'}>Стиральные машины</Link>
							</MenuItem>
							<MenuItem className={'menuItem'}>
								<Link style={{color:'black',textDecoration:'none'}} to={'/error-page'}>Телевизоры</Link>
							</MenuItem>
							<MenuItem className={'menuItem'}>
								<Link style={{color:'black',textDecoration:'none'}} to={'/error-page'}>Ноутбуки</Link>
							</MenuItem>
						</Select>
					</FormControl>
					<Button onClick={goBack} style={{display:location.pathname !== '/' && windowWidth < 959 ?'flex':'none'}} className='btn btn-back' color='inherit' variant="contained" >
						<span><ArrowBackIosIcon/></span>
					</Button>
					<form>
						<img src={search} alt="" />
						<input type="text" placeholder='Поиск товаров'
							   onChange={handleInputChange}
							   />

					</form>
					{suggestions.length === 0  ? null: searchTerm.length === 0?null:
						<div className={'searchModal'}>
							<ul className={'searchModal-main'}>
								{suggestions.map((suggestion, index) =>{
										return(
											<div data-aos="zoom-out"  key={index} className='product-main'>
												<img src={suggestion.img} alt="" />
												<div className='product-main-info'>
													<p>{suggestion.name}</p>
													<h4>{suggestion.title}</h4>
													<div className='price'>
														<div>
															<p>Цена <span><ArrowDropDownIcon /> {suggestion.percent}</span></p>
															<h2>{suggestion.price}</h2>
														</div>
														<div className='buttons'>
															<Fab size="small" color="inherit" aria-label="add">
																<img src={img2} alt="" />
															</Fab>
															<Fab size="small" color="inherit" aria-label="add">
																<img src={img1} alt="" />
															</Fab>
														</div>
													</div>
												</div>
											</div>
										)
									}

								)}
							</ul>
							<div className={'searchBottom'}>
								<div className={'search-left'}>
									<h1>Обзоры</h1>
									<div className={'search-left-block'}>
										{
											news.map((elem,index) => {
												return(
													<div className={'search-left-info'}>
														<img src={elem.img} alt=""/>
														<div>
															<h2>{elem.title}</h2>
															<p>{elem.text}</p>
															<button>Смотреть <span><KeyboardArrowRightIcon/></span></button>
														</div>
													</div>
												)
											})
										}
									</div>
								</div>
								<div className={'search-right'}>
									<h1>Часто ищут</h1>
									<ul >
										<li><button>Телевизор</button></li>
										<li><button>iPhone 14</button></li>
										<li><button>Планшет</button></li>
										<li><button>Смартфоны</button></li>
										<li><button>iPhone</button></li>
									</ul>
									<button className={'btn-play'}>Смотреть все результаты <span><KeyboardArrowRightIcon/></span></button>
								</div>
							</div>
						</div>}
				</div>
				<div className='header-info-btns'>
					<Button className='btn' color='inherit' variant="contained" >
						<Link to={'/error-page'}><img src={heard} alt="" /></Link>
					</Button>
					<Button className='btn' color='inherit' variant="contained" >
						<Link to={'/comparison'}><img src={chart} alt="" /></Link>
					</Button>
					<Button className='btn' color='inherit' variant="contained" >
						<Link to={'/error-page'}><img src={profil} alt="" /></Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
