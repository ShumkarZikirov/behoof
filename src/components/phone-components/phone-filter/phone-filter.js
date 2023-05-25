import React,{useState,useEffect} from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import './phone-filter.scss'
import  icon1 from '../../../assets/icons/arrow-3.png'
import  icon2 from '../../../assets/icons/setting-5.png'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import check from '../../../assets/icons/check.png'
function PhoneFilter() {
    const [age] = React.useState('')
    const [filter,setFilter] = useState(false)
    const [sort,setSort] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className={'filter'}>
                <div className={filter? 'flex active':'flex'} onClick={() => setFilter(false)}  style={{display:windowWidth > 959?'flex':filter? 'flex':'none'}}>
                    <div className={'filter-main'} onClick={(e) => e.stopPropagation()}>
                        <div className={'filter-left'}>
                            <button onClick={() => setFilter(false)} className={'close'}><CloseIcon/></button>
                            <h1>Качественные характеристики</h1>
                            <div className={'filter-left-main'}>
                                <div className={'left-1'}>
                                    <div className={'left-price'}>
                                        <h2>Цена</h2>
                                        <form>
                                            <input type="text" placeholder={'От'}/>
                                            <input type="text" placeholder={'До'}/>
                                        </form>
                                    </div>
                                    <div className={'left-diapazon'}>
                                        <h2>Диапазон</h2>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                color={'#FF4D4D'}
                                            >
                                                <FormControlLabel value="female" control={<Radio/>} label="0 - 10 000 ₽"
                                                                  sx={{
                                                                      '&.Mui-checked': {
                                                                          color: '#FF4D4D',
                                                                      },
                                                                  }}/>
                                                <FormControlLabel value="male" control={<Radio/>}
                                                                  label="10 000 - 20 000 ₽"/>
                                                <FormControlLabel value="other" control={<Radio/>}
                                                                  label="20 000 - 30 000 ₽"/>
                                                <FormControlLabel value="vsdv" control={<Radio/>} label="> 30 000 ₽"

                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className={'left-2'}>
                                    <h2>Батарея</h2>
                                    <FormGroup className={'check-main'} sx={{borderRadius: '50%'}}>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                    </FormGroup>
                                </div>
                                <div className={'left-2'}>
                                    <h2>Камера</h2>
                                    <FormGroup className={'check-main'}>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className={'filter-right'}>
                            <div className={'right-main'}>
                                <h1>Дополнительные фильтры</h1>
                                <button className={'button-filter'}>Все фильтры <span><KeyboardArrowRightIcon/></span>
                                </button>
                            </div>
                            <div className={'right-block'}>
                                <div>
                                    <h2>Ответ</h2>
                                    <FormGroup className={'check-main'}>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                    </FormGroup>
                                </div>
                                <div>
                                    <h2>Портативность</h2>
                                    <FormGroup className={'check-main'}>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                        <label className={'checkbox-filter'}>
                                            <input type="checkbox" />
                                            <span>Text label</span>
                                        </label>
                                    </FormGroup>
                                </div>
                                <div>
                                    <h2>4G (LTE)</h2>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                                            label="iOS style"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <FormControl className='select-filter'
                             sx={{
                    m: 0,
                    height: 52,
                    minWidth: 180,
                    backgroundColor: '#FDFDFD',
                    border: '1px solid #F2F5F9',
                    borderRadius: '8px',
                    '.MuiOutlinedInput-notchedOutline': {border: 0}
                }}>

                    <Select
                        displayEmpty
                        value={age}
                        label="Age"
                        inputProps={{'aria-label': 'Without label'}}
                        className='select-text'
                    >
                        <MenuItem className={'menuItem'} value=''>
                            По последним отзывам
                        </MenuItem>
                        <MenuItem className={'menuItem'}>
                            По релевантности
                        </MenuItem>
                        <MenuItem className={'menuItem'}>
                            По количеству отзывов
                        </MenuItem>
                    </Select>
                </FormControl>
            <div className={sort? 'sort active':'sort'} onClick={() => setSort(false)} style={{display:sort?'block':'none'}}>
                <div className={'sort-block'}  onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setSort(false)} className={'close'}><CloseIcon/></button>
                    <h1 className={'sort-title'}>Сортировка</h1>
                    <ul>
                        <li className={'menuItem'} value=''>
                            По последним отзывам
                        </li>
                        <li className={'menuItem'}>
                            По релевантности
                        </li>
                        <li className={'menuItem'}>
                            По количеству отзывов
                        </li>
                    </ul>
                </div>
            </div>

            {
                filter && sort?null: <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    color={'inherit'}
                    className={'btn-mobile'}
                >
                    <Button onClick={() => setSort(true)}><img src={icon1} alt=""/> Сортировка</Button>
                    <Button onClick={() => setFilter(true)}><img src={icon2} alt=""/> Фильтры</Button>
                </ButtonGroup>
            }

        </div>
    );
}

export default PhoneFilter;
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#FF4D4D' : '#FF4D4D',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));