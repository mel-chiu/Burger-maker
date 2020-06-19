import React from 'react';
import Auxi from '../../../HOC/Auxi';
import Button from '../../UI/ButtonStyle/ButtonStyle'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((ingredientsKey) => {
        return (
        <li key={ingredientsKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingredientsKey}</span> : {props.ingredients[ingredientsKey]}
        </li>);
    });
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>Your Burger includes:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: &euro;{props.price.toFixed(2)}</p>
            <p>Check out?</p>
            <Button btnType = {"Success"} clicked={props.continuePurchase}>Yes, continue</Button>
            <Button btnType = {"Danger"} clicked={props.canclePurchase}>Later</Button>
        </Auxi>
    )
}

export default OrderSummary;