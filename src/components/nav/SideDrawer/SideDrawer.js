import React from 'react';
import Logo from '../../LOGO/LOGO';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../HOC/Auxi';

const SideDrawer = (props) => {
    let attechedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attechedClasses = [classes.SideDrawer, classes.Open];
    }

    
    return (
        <Auxi>
            <Backdrop show={props.open} goBack={props.closed}/>
            <div className={attechedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavItems />
                </nav>
            </div>
        </Auxi>
    )
}

export default SideDrawer;