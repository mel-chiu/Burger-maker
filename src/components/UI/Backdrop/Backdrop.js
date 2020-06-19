import React from 'react';
import classses from './Backdrop.module.css';

const Backdrop =(props) =>{
    return(
        props.show? <div className={classses.Backdrop} onClick={props.goBack}></div>:null
    );
}

export default Backdrop;