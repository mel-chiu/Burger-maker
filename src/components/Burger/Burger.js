import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const Burger = (props) =>{

        let transformedIngredients = Object.keys(props.ingredients).map(ingredientsKey=>{
            return [...Array(props.ingredients[ingredientsKey])].map((_, i)=>{
               return <BurgerIngredients key={ingredientsKey+i} type={ingredientsKey}/>
            });
        }).reduce((arr,el)=>{
            return arr.concat(el);
        },[]);

        if(transformedIngredients.length===0){
            transformedIngredients = <p>Please add some ingredients</p>
        }

        return(
            <div className={classes.Burger}>
                <BurgerIngredients type="bread-top"/>
               {transformedIngredients}
                <BurgerIngredients type="bread-bottom"/>
            </div>
            
        );
    }


export default Burger;