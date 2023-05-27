import React from 'react';
import './isError.scss'
import {Link} from 'react-router-dom'
const IsError = () => {
    return (
        <div className={'isError'}>
            <div className={'isError-main'}>
                <h1>404</h1>
                <h2>СТРАНИЦА НЕ НАЙДЕНА</h2>
                <p>Страница, на которую вы пытаетесь попасть, не существует или было удалена.</p>
                <span>Перейдите на <Link to={'/'}>Главную страницу</Link></span>
            </div>
        </div>
    );
};

export default IsError;
