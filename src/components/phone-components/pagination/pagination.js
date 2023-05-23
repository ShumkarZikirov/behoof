import React from "react";
import './pagination.scss'
const Pagination = () => {

    return (
        <div className={'pagination'}>
            <div className={'pagination-main'}>
                <button>Назад</button>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>...</li>
                    <li>51</li>
                </ul>
                <button>Вперед</button>
            </div>
        </div>
    );
};

export default Pagination