import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import './swiper.scss'
import { Navigation } from "swiper"
import Slider from '../slider/slider'

const Swipers = () => {
	return (
		<div className={'swiper-block'}>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				<SwiperSlide><Slider /></SwiperSlide>
				<SwiperSlide><Slider /></SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Swipers