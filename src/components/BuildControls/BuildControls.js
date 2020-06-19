import React from 'react';
import classes  from './BuildControls.module.css';
import BuildControlBtn from '../BuildControls/BuildControlBtn/BuildControlBtn';

const controls = [
    {label:'Bacon', type:'bacon'},
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}    
]

const BuildControls =(props) =>{
    return (
        <div className={classes.BuildControls}> 
        <p>Current Price: <strong>&euro;{props.price.toFixed(2)}</strong></p>
        {controls.map((item)=>{
            return <BuildControlBtn 
            key={item.label} 
            label={item.label}
            added={()=>props.addIngredients(item.type)}
            removed={()=>props.removeIngredients(item.type)}
            disabled={props.disabled[item.type]}/>
        })}
        <button className={classes.OrderButton} disabled={!props.purchase}>Order</button>
        </div>
    )
};

export default BuildControls;