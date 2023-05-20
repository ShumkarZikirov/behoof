import React,{useState} from 'react';
import './review-page.scss'
import News from "../../components/main-components/news/news";
import Choice from "../../components/main-components/choice/choice";
import {Link} from "react-router-dom";
import search from "../../assets/icons/search-normal.png";
import {news} from "../../arrays/news";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ReviewPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const suggestions = getSuggestions(searchTerm);
        setSuggestions(suggestions);
    };
    const getSuggestions = (searchTerm) => {
        return news.filter((suggestion) =>
            suggestion.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
    return (
        <div className={'review'}>
            <div className={'review-main'}>
                <h4><Link to={'/'}>Главная</Link>/Обзоры</h4>
                <div className={'review-search'}>
                    <h1>Обзоры, чтобы выбрать нужное</h1>
                    <form>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Поиск по обзорам'
                               onChange={handleInputChange}
                        />
                    </form>
                    <div className={'modal-review'}>
                        {suggestions.length === 0  ? null: searchTerm.length === 0?null:
                            <div className={'search-left-block'}>
                                {
                                    news.map((elem,index) => {
                                        return(
                                            <div className={'search-left-info'}>
                                                <img src={elem.img} alt=""/>
                                                <div>
                                                    <h2>{elem.title}</h2>
                                                    <p>{elem.text}</p>
                                                    <button>Смотреть <span><KeyboardArrowRightIcon/></span></button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <Choice text={'Категории обзоров'}/>
                <div className={'news-review'}>
                    <h1>Обзоры</h1>
                    <News/>
                    <News/>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
