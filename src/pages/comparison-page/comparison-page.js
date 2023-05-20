import React,{useState,useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import icon from "../../assets/icons/export.png";
import DeleteIcon from '@mui/icons-material/Delete';
import './comparison-page.scss'
import ListPhone from "../../components/comparison-components/list-phone/list-phone";
import DetailTables from "../../components/comparison-components/detail-tables/detail-tables";
import {comparison} from "../../arrays/comparison";
function ComparisonPage() {
    const [product,setProduct] = useState(comparison)
    const [visibleProducts, setVisibleProducts] = useState(product.slice(0, 4));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [width,setWidth] = useState(0)
    useLayoutEffect(() => {

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setWidth(windowWidth);

            if (windowWidth < 959) {
                setVisibleProducts(product.slice(0, 2));
            } else {
                setVisibleProducts(product.slice(0, 4));
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [product]);
    const handlePreviousProduct = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            setVisibleProducts(product.slice(prevIndex, prevIndex + 4));
        }
    };

    const handleNextProduct = () => {
        if (currentIndex + 4 < product.length) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setVisibleProducts(product.slice(nextIndex, nextIndex + 4));
        }
    };
    const handlePreviousProductMin = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            setVisibleProducts(product.slice(prevIndex, prevIndex + 2));
        }
    };

    const handleNextProductMin = () => {
        if (currentIndex + 2 < product.length) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setVisibleProducts(product.slice(nextIndex, nextIndex + 2));
        }
    };

    return (
        <div className={'comparison'}>
            <div className={'comparison-main'}>
                <h4><Link to={'/'}>Главная</Link>/Сравнение</h4>
                <div>
                    <h1 className={'title'}>Сравнение товаров</h1>
                    <p className={'none'}><button> <span><DeleteIcon/></span>Удалить все списки</button></p>
                </div>
            </div>
            <div className={'comparison-block'}>
                <ListPhone visibleProducts={visibleProducts} width={width} handlePreviousProductMin={handlePreviousProductMin} handleNextProductMin={handleNextProductMin} handlePreviousProduct={handlePreviousProduct} handleNextProduct={handleNextProduct}/>
                <DetailTables visibleProducts={visibleProducts}/>
            </div>
        </div>
    );
}

export default ComparisonPage;