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
//important! never use setState together with this.state.xxx.
    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return{showSideDrawer : !prevState.showSideDrawer}
        }); 
    }

    render(){ 
        return (
        <Auxi>
            <div>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>  
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