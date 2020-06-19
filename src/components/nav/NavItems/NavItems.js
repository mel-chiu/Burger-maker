import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const NavItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" active>Shopping Bag</NavItem>
            <NavItem link="/" active>Checkout</NavItem>
        </ul>
    );
}

export default NavItems;