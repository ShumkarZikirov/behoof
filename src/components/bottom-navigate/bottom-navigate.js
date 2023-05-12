
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import * as React from 'react'
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'
import img5 from '../../assets/icons/5.png'
const BottomNavigate = () => {
	const [value, setValue] = React.useState('')

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0 }} value={value} onChange={handleChange} showLabels>
			<BottomNavigationAction
				label="Главная"

				icon={<img src={img1} />}
			/>
			<BottomNavigationAction
				label="Каталог"
				icon={<img src={img2} />}
			/>
			<BottomNavigationAction
				label="Избранное"
				icon={<img src={img3} />}
			/>
			<BottomNavigationAction
				label="Сравнения"
				icon={<img src={img4} />}
			/>
			<BottomNavigationAction
				label="Профиль"
				icon={<img src={img5} />}
			/>
		</BottomNavigation>
	)
}
export default BottomNavigate