import React, { Component } from "react";
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingredientPrices = {
    bacon: 0.8,
    meat: 1.2,
    salad: 0.4,
    cheese: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchase: false,
        purchasing: false
    }

    updatePurchase = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(ingredientsKey => {
                return ingredients[ingredientsKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchase: sum > 0 });
    }
    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const upgradeIngredients = { ...this.state.ingredients };
        upgradeIngredients[type] = newCount;
        const additionalPrice = ingredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionalPrice;
        this.setState({
            totalPrice: newPrice,
            ingredients: upgradeIngredients
        })
        this.updatePurchase(upgradeIngredients);
    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const upgradeIngredients = { ...this.state.ingredients };
        upgradeIngredients[type] = newCount;
        const priceDeduction = ingredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: upgradeIngredients
        })
        this.updatePurchase(upgradeIngredients);
    }

    purchaseHandler =() =>{
        this.setState({purchasing: true});
    }
    canclePurchaseHandler = () =>{
        this.setState({purchasing: false});
    }
    continuePurchaseHandler = () => {
        alert('Loading..');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxi>
                <Modal show = {this.state.purchasing} modalClosed = {this.canclePurchaseHandler}>
                    <OrderSummary 
                    continuePurchase={this.continuePurchaseHandler} 
                    canclePurchase = {this.canclePurchaseHandler} 
                    ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    addIngredients={this.addIngredients}
                    removeIngredients={this.removeIngredients}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchase={this.state.purchase} 
                    ordered = {this.purchaseHandler}/>


            </Auxi>
        );
    }
};

export default BurgerBuilder;