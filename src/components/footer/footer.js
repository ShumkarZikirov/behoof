import React from 'react'
import img3 from '../../assets/icons/Inst.png'
import img4 from '../../assets/icons/TG.png'
import img2 from '../../assets/icons/TT.png'
import logo from '../../assets/icons/behoof_logo.png'
import img1 from '../../assets/icons/vk.png'
import img5 from '../../assets/icons/youtube.png'
import './footer.scss'
const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-main'>
				<div className='footer-main-block'>
					<div className='block1'>
						<div>
							<img src={logo} alt="" />
							<p>Behoof</p>
						</div>
						<p className='me'>Мы в соц сетях</p>
						<div className='imgs'>
							<img src={img1} alt="" />
							<img src={img2} alt="" />
							<img src={img3} alt="" />
							<img src={img4} alt="" />
							<img src={img5} alt="" />
						</div>
					</div>
					<div className='block2'>
						<h1>Пользователю</h1>
						<ul>
							<li>Связаться с нами</li>
							<li>Поддерка пользователей</li>
							<li>FAQ & Руководства</li>
							<li>Политика конфиденциальности</li>
							<li>Пользовательское соглашение</li>
						</ul>
					</div>
					<div className='block3'>
						<h1>Популярные категории</h1>
						<ul>
							<li>Смартфоны</li>
							<li>Teteras electricas</li>
							<li>Стиральные машины</li>
							<li>Телевизоры</li>
							<li>Ноутбуки</li>
						</ul>
					</div>
					<div className='block4'>
						<h1>Команда Behoof</h1>
						<ul>
							<li>О нас</li>
							<li>Работа у нас</li>
						</ul>
					</div>
				</div>
				<p className='text'>Copyright © 2023 Behoof, Inc. Все права защищены</p>
			</div>
		</div>
	)
}

export default Footer
