import './graphic.scss'
import React,{useRef} from 'react';
import Eldarado from "../eldarado/eldarado";
import Sity from "../sity/sity";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {getElementAtEvent, Line} from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
const Graphic = ({width}) => {

    const chartRef = useRef()
    const clickToolkit = (event) => {
    if(getElementAtEvent(chartRef.current,event).length >0){
        const clickData = getElementAtEvent(chartRef.current,event)[0].datasetIndex
        const dataPoint = getElementAtEvent(chartRef.current,event)[0].index
    }
    }
    const data = {
        labels:['','Сент','','Окт','','Нояб','','Дек','','Янв','','Фев'],
        datasets:[{label:null,data:[10000,40000,30000,60000,30000,32000,90000,50000,78999,30000,80000,50000],borderWidth: 2,borderColor:'#FF4D4D33',backgroundColor: '#FF4D4D33',tension:0,fill: true,}]
    }
    const data2 = {
        labels:['','Сентябрь','','Октябрь','','Ноябрь','','Декабрь','','Январь','','Февраль'],
        datasets:[{label:null,data:[10000,40000,30000,60000,30000,32000,90000,50000,78999,30000,80000,50000],borderWidth: 2,borderColor:'#FF4D4D33',backgroundColor: '#FF4D4D33',tension:0,fill: true,}]
    }
    const options = {
        plugins:{
            legend:{
                display:false
            },
            tooltip: {
                backgroundColor: 'white', // Изменить цвет фона подсказки
                titleColor: '#7E8794', // Изменить цвет заголовка подсказки
                bodyColor: 'black', // Изменить цвет текста подсказки
                borderColor: '#F2F5F9', // Изменить цвет границы подсказки
                borderWidth: 1,
                width:90,
                height:70,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed.y + ' ₽'; // Добавить символ после текста
                        return label;
                    },

                }
            },
        },

            scales: {
                y: {
                    display: false,
                    grid: {
                        color: 'FF4D4D33', // Цвет горизонтальных полос сетки
                    },

                },
                x: {
                    grid: {
                        display: false, // Скрыть вертикальные полосы
                    },
                    ticks:{
                        font:{
                            size:12
                        },

                    }
                }
            },
    };
    return (
        <div className={'graphic'}>
            <h1>История цены</h1>
            <div  className={'graphic-diagram'} style={{ width: '100%' }}>
                <Line data={width< 959 ? data:data2}  options={options} onClick={clickToolkit} ref={chartRef}/>
            </div>
            <div className={'store'}>
                <Eldarado/>
                <Sity/>
                <Sity/>
                <Eldarado/>
                <Eldarado/>
                <Sity/>
                <Sity/>
                <Eldarado/>
            </div>
        </div>
    );

}

export default Graphic