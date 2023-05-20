import React from 'react'
import './choice.scss'
import {choice} from '../../../arrays/choice'
import {Link,useNavigate} from "react-router-dom";

const Choice = ({text}) => {
	const navigate = useNavigate()
	const click = (id) => {
		if(id === 1){
			navigate('/phone')
		}
	}
  return (
	<div className='choice'>
	  <h1>{text}</h1>
	  <div className='choice-block'>
		{
			choice.map(elem => {
				return(
					<div onClick={() => click(elem.id)} key={elem.id} className='choice-block-info'>
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
