import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../LOGO/LOGO';
import NavItems from '../NavItems/NavItems';


const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.DeskTopOnly}>
                <NavItems />
            </nav>
        </header>
    );
};

export default Toolbar;