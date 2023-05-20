import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React from 'react'
import { news } from '../../../arrays/news'
import './news.scss'
import {Link} from "react-router-dom";
const News = ({link}) => {
	return (
		<div className='news'>
			<div className='news-text'>
				{
					link?(
						<>
						<p>Обзоры</p>
						<Link to={'/review'}>К обзорам <span><KeyboardArrowRightIcon /></span></Link> </>):null
				}
			</div>
			<div className='news-block'>
				{
					news.map(elem => {
						return (
							<div data-aos="zoom-in" key={elem.id} className='news-info'>
								<img src={elem.img} alt="" />
								<div className='info-text'>
									<h4>{elem.title}</h4>
									<p>{elem.text}</p>
									<button>Смотреть <span><KeyboardArrowRightIcon /></span></button>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default News
