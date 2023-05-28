import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import './info-characteristic.scss'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from "../list-item/list-item";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const InfoCharacteristic = ({visibleProducts}) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className={'info-characteristic'}>
            {
                visibleProducts.map((elem, index) => {
                    return (
                        <div key={index} className={'info-characteristic-main'}>
                            <h1>Характеристики {elem.title}</h1>
                            <div className={'info-characteristic-main-top'}>
                                <p>Камера <span>{elem.camera}</span></p>
                                <p>Система <span>{elem.sistem}</span></p>
                                <p>Диагональ <span>{elem.diog}</span></p>
                                <p>Зарядка <span>{elem.charge}</span></p>
                            </div>
                            <button style={{display: active ? 'none' : 'flex'}} onClick={() => setActive(true)}>Полный
                                список
                                характеристик <span><KeyboardArrowDownIcon/></span></button>
                            {active ?
                                <div className={'active-main'}>
                                    <div className={'active-block'}>
                                        <h2>Заводские данные</h2>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Тип'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.tip}/>
                                            <ExpandMore/>
                                        </ListItemButton>

                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Модель'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.model}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Год релиза'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.year}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                    </div>
                                    <div>
                                        <h2>Экран</h2>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Диагональ экрана (дюйм)'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.diog}/>
                                            <ExpandMore/>
                                        </ListItemButton>

                                        <ListItemButton onClick={handleClick} className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Разрешение камеры'}/>

                                            <ListItemText className={'active-block-btn-text2'} primary={elem.razcamer}/>
                                            {open ? <ExpandLess/> : <ExpandMore/>}
                                        </ListItemButton>
                                        <Collapse   in={open} timeout="auto" unmountOnExit>
                                            <List component="div" >
                                                <ListItemButton sx={{padding:0}}>
                                                    <ListItem/>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Тип'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.tip}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Плотность пикселей'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.pixel}/>
                                            <ExpandMore/>
                                        </ListItemButton >
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Технология изготовления экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.ekran}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Количество цветов экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.colorSum}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Конструктивные особенности экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.constEkran}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                    </div>
                                    <div>
                                        <h2>Заводские данные</h2>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Тип'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.tip}/>
                                            <ExpandMore/>
                                        </ListItemButton>

                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Модель'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.model}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Год релиза'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.year}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                    </div>
                                    <div>
                                        <h2>Экран</h2>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Диагональ экрана (дюйм)'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.diog}/>
                                            <ExpandMore/>
                                        </ListItemButton>

                                        <ListItemButton className={'active-block-btn'} >
                                            <ListItemText className={'active-block-btn-text1'} primary={'Разрешение экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={'2532x1170'}/>
                                            <ExpandMore/>
                                        </ListItemButton>

                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Тип'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.tip}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Плотность пикселей'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.pixel}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Технология изготовления экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.ekran}/>
                                            <ExpandMore/>
                                        </ListItemButton >
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Количество цветов экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.colorSum}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                        <ListItemButton className={'active-block-btn'}>
                                            <ListItemText className={'active-block-btn-text1'} primary={'Конструктивные особенности экрана'}/>
                                            <ListItemText className={'active-block-btn-text2'} primary={elem.constEkran}/>
                                            <ExpandMore/>
                                        </ListItemButton>
                                    </div>
                                    <button
                                        onClick={() => setActive(false)}>Свернуть <span><KeyboardArrowUpIcon/></span>
                                    </button>
                                </div>
                                : null}
                        </div>

                    )
                })
            }
        </div>
    );
};

export default InfoCharacteristic;
