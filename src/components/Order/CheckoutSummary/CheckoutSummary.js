import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/ButtonStyle/ButtonStyle';
import classes from './CheckoutSummary.module.css';


const CheckoutSummary = (props) =>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your burger!</h1>
            <div style={{width:"100%", margin:"auto"}}>
                <Burger ingredients={props.ingredients}/>
                
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Danger" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
}

export default CheckoutSummary;