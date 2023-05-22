import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './list-item.scss'
const ListItem = () => {
    return (
        <div className={'list-item'}>
            <p>Разрешение камеры <span>50 мегапикселей</span> - это для смартфонов обычное значение, наилучшее значение в диапазоне за пределами 64 мегапикселей.</p>
            <div className={'list-item-main'}>
                <div className={'list-item-main-mg'}>50 мг</div>
                <div className={'list-arrow'}><ArrowDropDownIcon/></div>
                <div className={'list-item-main-colors'}>
                    <div className={'color1'}></div>
                    <div className={'color2'}><span className={'color2-span'}></span></div>
                    <div className={'color3'}></div>
                </div>
                <p className={'list-item-main-num1'}>40 мг</p>
                <p className={'list-item-main-num2'}>64 мг</p>
            </div>
        </div>
    );
};

export default ListItem;
