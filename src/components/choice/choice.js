import React from 'react'
import './choice.scss'
import {choice} from '../../arrays/choice'
const Choice = () => {
	console.log(choice);
  return (
	<div className='choice'>
	  <h1>Лучший выбор</h1>
	  <div className='choice-block'>
		{
			choice.map(elem => {
				return(
					<div className='choice-block-info'>
						<div>
						<img src={elem.img} alt="" />
						</div>
						<p>{elem.name}</p>
						
					</div>
				)
			})
		}
	  </div>
	</div>
  )
}

export default Choice
