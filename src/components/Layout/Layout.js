import React, { useState } from 'react';
import Auxi from '../../HOC/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../nav/Toolbar/Toolbar';
import SideDrawer from '../nav/SideDrawer/SideDrawer';
import { render } from '@testing-library/react';

class Layout extends React.Component{

    state={showSideDrawer: true};

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    };

    render(){ 
        return (
        <Auxi>
            <div>
                <Toolbar/>  
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>          
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxi>

    );
}
   
};

export default Layout;