import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React from 'react'
import { news } from '../../arrays/news'
import './news.scss'
const News = () => {
	return (
		<div className='news'>
			<div className='news-text'>
				<p>Обзоры</p>
				<button>К обзорам <span><KeyboardArrowRightIcon /></span></button>
			</div>
			<div className='news-block'>
				{
					news.map(elem => {
						return (
							<div className='news-info'>
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
