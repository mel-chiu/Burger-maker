import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

class Burger extends React.Component{
    render(){
        return(
            <div className={classes.Burger}>
                <BurgerIngredients type="bread-top"/>
                <BurgerIngredients type="bacon"/>
                <BurgerIngredients type="cheese"/>
                <BurgerIngredients type="meat"/>
                <BurgerIngredients type="salad"/>
                <BurgerIngredients type="bread-bottom"/>
            </div>
            
        );
    }
}

export default Burger;