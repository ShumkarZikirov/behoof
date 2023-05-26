import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import './error-page.scss'
const ErrorPage = () => {
    const [isOnline, setOnline] = useState(true);
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])
    window.addEventListener('online', () => {
        setOnline(true)
    });
    window.addEventListener('offline', () => {
        setOnline(false)
    });
    // if user is online, return the child component else return a custom component
    if(!isOnline){
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
        );
    }
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
