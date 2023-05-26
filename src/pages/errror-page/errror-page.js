import React from 'react';
import {Link} from "react-router-dom";
import './error-page.scss'
const ErrorPage = () => {

    return (
        <div className={'error'}>
            <div className={'error-main'}>
                <h1>Упс...</h1>
                <h3>Страница не найдена</h3>
                <p>Тут что то упало и это не страшно!
                    Но мы все сохранили ;)</p>
                <Link to={'/'}>Перейти на главную</Link>
            </div>
        </div>
    )

};

export default ErrorPage;
