import React, {Component} from "react";
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/BuildControls/BuildControls";

const ingredientPrices = {
    bacon:0.8,
    meat:1.2,
    salad:0.4,
    cheese:0.5
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4

    }
    addIngredients=(type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount+1;
        const upgradeIngredients = {...this.state.ingredients};
        upgradeIngredients[type] = newCount; 
        const additionalPrice = ingredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionalPrice;
        this.setState({
            totalPrice: newPrice,
            ingredients:upgradeIngredients
        })

    }

    removeIngredients=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const newCount = oldCount-1;
        const upgradeIngredients = {...this.state.ingredients};
        upgradeIngredients[type] = newCount; 
        const priceDeduction = ingredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients:upgradeIngredients
        })

    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        }
        return(
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls 
                    addIngredients={this.addIngredients} 
                    removeIngredients={this.removeIngredients} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
                </div>
            </Auxi>
        );
    }
};

export default BurgerBuilder;