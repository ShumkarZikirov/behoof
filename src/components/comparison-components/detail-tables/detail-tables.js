import React from 'react';
import './detail-tables.scss'
import {comparison} from "../../../arrays/comparison";
import Rating from '@mui/material/Rating';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const DetailTables = ({visibleProducts}) => {
    return (
        <div className={'tables'}>
            <h1>Сравнение товаров</h1>
            <div>
                <h3>Рейтинг</h3>
                <div>
                    {visibleProducts.map((elem,index) => {
                        return(
                            <div key={index} className={'table'}>
                                <Rating name="read-only"  value={elem.rating} readOnly />
                                <span className={'span-people'}>{elem.people}</span>
                            </div>
                        )})}
                </div>
            </div>
            <div>
                <h3>Модель</h3>
                <div>
                    {visibleProducts.map((elem,index) => {
                        return(
                            <div key={index} className={'table'}>
                                <p>{elem.model}</p>
                            </div>
                        )})}
                </div>
            </div>
            <div>
                <h3>Год релиза</h3>
                <div>
                    {visibleProducts.map((elem,index) => {
                        return(
                            <div key={index} className={'table'}>
                                <p>{elem.year}</p>
                            </div>
                        )})}
                </div>
            </div>
            <div>
                <h3>Количество ядер</h3>
                <div>
                    {visibleProducts.map((elem,index) => {
                        return(
                            <div key={index} className={'table'}>
                                <p>{elem.yader}</p>
                            </div>
                        )})}
                </div>
            </div>
            <div>
                <h3>Поддержка сетей 4G (LTE)</h3>
                <div>
                    {visibleProducts.map((elem,index) => {
                        return(
                            <div key={index} className={'table'}>
                                <p>{elem.lte? <CheckIcon style={{color:'#30D170'}}/>:<CloseIcon style={{color:'#FF3B30'}}/>}</p>
                            </div>
                        )})}
                </div>
            </div>
            <div>
                <h3>Объем встроенной памяти</h3>
                <div>
                    {visibleProducts.map((elem,index) => {
                        return(
                            <div key={index} className={'table'}>
                                <p>{elem.ram}</p>
                            </div>
                        )})}
                </div>
            </div>
        </div>
    );
};

export default DetailTables;
