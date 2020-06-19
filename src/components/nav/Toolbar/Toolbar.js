import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../LOGO/LOGO';
import NavItems from '../NavItems/NavItems';
import SideDrawer from '../SideDrawer/SideDrawer';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const Toolbar = (props) => {
    
    return (
        <header className={classes.Toolbar}>
            <div> 
                <DrawerToggle clicked={props.drawerToggleClicked}/>
            </div>
           
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.DeskTopAndIpad}>
                <NavItems />
            </nav>
        </header>
    );
};

export default Toolbar;