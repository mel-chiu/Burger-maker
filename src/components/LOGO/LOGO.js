import React from 'react';
import burgerLogo from '../../assets/BurgerLOGO.png';
import classes from './LOGO.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger-Logo"/>
        </div>
    )
};

export default Logo;