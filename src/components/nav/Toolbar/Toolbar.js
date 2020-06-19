import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../LOGO/LOGO';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </header>
    );
};

export default Toolbar;