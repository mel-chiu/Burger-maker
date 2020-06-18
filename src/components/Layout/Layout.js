import React from 'react';
import Auxi from '../../HOC/Auxi';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <Auxi>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxi>

    );
};

export default Layout;