import React from 'react'
import img from '../../../assets/image/Banner-Normal.jpg'
import app from '../../../assets/image/appstore.png'
import google from '../../../assets/image/goole.png'
import iphones from '../../../assets/image/iphones.png'
import './info-text.scss'
const InfoText = () => {
	return (
		<div className='info-text'>
			<h1>Наша цель - создать фантастический <br />
				сервис для всех потребителей</h1>
			<div className='info-text-block'>
				<div>
					<h2>5</h2>
					<p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </p>
				</div>
				<div>
					<h2>30</h2>
					<p>
						Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.
					</p>
				</div>
				<div>
					<h2>300</h2>
					<p>Sed varius ut venenatis id amet et consectetur pellentesque. Vitae urna ornare vel suspendisse tincidunt. </p>
				</div>
				<div>
					<h2>8</h2>
					<p>Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convallis velit. </p>
				</div>
			</div>
			<div className='banners'>
				
				<div className='block'>
					<div className='info'>
						<h1><span>Экономьте</span> свое время
							и получайте <span>максимум</span>
							от ежедневных покупок</h1>
						<div>
							<img src={google} alt="" />
							<img src={app} alt="" />
						</div>
					</div>
					<img className='tell' src={iphones} alt="" />
				</div>
				<img className='img-banner' src={img} alt="" />
			</div>
		</div>
	)
}

export default InfoText
