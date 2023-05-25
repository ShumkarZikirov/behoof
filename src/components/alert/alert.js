import React,{useState} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CloseIcon from '@mui/icons-material/Close';
import './alert.scss'
const Alerts = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        setShowAlert(true);
    };
    return (
        <div className={'alert-error'}>
            <span className={'error'}><PriorityHighIcon/></span>
            <p>Сообщение об ошибке</p>
            <span className={'close'}><CloseIcon/></span>
        </div>
    );
};

export default Alerts;
