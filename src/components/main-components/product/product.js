import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Fab from '@mui/material/Fab'
import React from 'react'
import { newProduct } from '../../../arrays/new'
import img2 from '../../../assets/icons/Vector.png'
import img1 from '../../../assets/icons/chart.png'
import './product.scss'
const Product = () => {
	return (
		<div className='product'>
			<div className='product-text'>
				<p>Новинки</p>
				<button>К новинкам <span><KeyboardArrowRightIcon /></span></button>
			</div>
			<div className='product-block'>
				{
					newProduct.map((elem,index) => {
						return (
							<div data-aos="zoom-out"  key={index} className='product-main'>
								<img src={elem.img} alt="" />
								<div className='product-main-info'>
									<p>{elem.name}</p>
									<h4>{elem.title}</h4>
									<div className='price'>
										<div>
											<p>Цена <span><ArrowDropDownIcon /> {elem.percent}</span></p>
											<h2>{elem.price}</h2>
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
					})
				}
			</div>
		</div>
	)
}

export default Product
