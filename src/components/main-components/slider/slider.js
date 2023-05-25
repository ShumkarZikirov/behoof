import Fab from '@mui/material/Fab'
import React from 'react'
import { info } from '../../../arrays/info'
import img2 from '../../../assets/icons/Vector.png'
import img1 from '../../../assets/icons/chart.png'
import Rating from '../rating/rating'
import './slider.scss'
const Slider = () => {
	return (
		<div className='slider'>
			<div className='slider-main'>
				<div className='rating-block'>
					{
						info.map((elem,index) => {
							return (
								<div key={index} className='rating-main'>
									<div className='rating-top'>
										<div className='rating-top-text'>
											<p>{elem.name}</p>
											<h4>{elem.title}</h4>
										</div>
										<div className='rating-top-btns'>
											<Fab sx={{boxShadow:2}} size="small" color="inherit" aria-label="add">
												<img src={img2} alt="" />
											</Fab>
											<Fab sx={{boxShadow:2}} size="small" color="inherit" aria-label="add">
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
