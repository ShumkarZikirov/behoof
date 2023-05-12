import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import Fab from '@mui/material/Fab'
import React from 'react'
import { info } from '../../arrays/info'
import img2 from '../../assets/icons/Vector.png'
import img1 from '../../assets/icons/chart.png'
import Rating from '../rating/rating'
import './slider.scss'
const Slider = () => {
	return (
		<div className='slider'>
			<Fab size="medium" className='left-btn' color="inherit" aria-label="add">
				<ArrowBackIosIcon />
			</Fab>
			<Fab size="medium" className='right-btn' color="inherit" aria-label="add">
				<ArrowForwardIosIcon />
			</Fab>
			<div className='slider-main'>
				<ul className='slider-ul'>
					<li className='color'>Дизайн <span><CloseIcon /></span></li>
					<li className='color'>Портативность <span><CloseIcon /></span></li>
					<li>Камера</li>
					<li>Ответ</li>
					<li>Дисплей</li>
					<li>Батарея</li>
				</ul>
				<div className='rating-block'>
					{
						info.map(elem => {
							return (
								<div className='rating-main'>
									<div className='rating-top'>
										<div className='rating-top-text'>
											<p>{elem.name}</p>
											<h4>{elem.title}</h4>
										</div>
										<div className='rating-top-btns'>
											<Fab size="small" color="inherit" aria-label="add">
												<img src={img2} alt="" />
											</Fab>
											<Fab size="small" color="inherit" aria-label="add">
												<img src={img1} alt="" />
											</Fab>
										</div>
									</div>
									<div className='rating-info'>
										<img src={elem.img} alt="" />
										<div className='progress'>
											<div>
												<p>Дизайн</p>
												<Rating number={elem.desing} />
											</div>
											<div>
												<p>Батарея</p>
												<Rating number={elem.batar} />
											</div>
											<div>
												<p>Дисплей</p>
												<Rating number={elem.display} />
											</div>
											<div>
												<p>Камера</p>
												<Rating number={elem.camer} />
											</div>
											<div>
												<p>Ответ</p>
												<Rating number={elem.value} />
											</div>
											<div>
												<p>Портативность</p>
												<Rating number={elem.por} />
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Slider
