import React, { Component } from "react";
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';


const ingredientPrices = {
    bacon: 0.8,
    meat: 1.2,
    salad: 0.4,
    cheese: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchase: false,
        purchasing: false,
        loading:false
    }
    componentDidMount(){
        axios.get('https://mel-burger-maker.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients:response.data})
        })
    };
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

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    canclePurchaseHandler = () => {
        this.setState({ purchasing: false });
    }
    continuePurchaseHandler = () => {
        this.setState({loading:true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Melissa",
                address: {
                    city: 'New York',
                    number: 1,
                    email: 'haha@gmail.com'
                }
            },
            delievery: 'priority'
        }

        axios.post('/order.json', order)
        .then(response => {this.setState({loading:false, purchasing: false});})
        .catch(error=> {this.setState({loading:false, purchasing: false});});
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        
       

        let burger = <Spinner/>
        if(this.state.ingredients){
            burger=(
                <Auxi>
                    <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    addIngredients={this.addIngredients}
                    removeIngredients={this.removeIngredients}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchase={this.state.purchase}
                    ordered={this.purchaseHandler} />

                </Auxi>
            );
            orderSummary =   <OrderSummary
                        continuePurchase={this.continuePurchaseHandler}
                        canclePurchase={this.canclePurchaseHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice} />;
        }
         if(this.state.loading){
            orderSummary = <Spinner/>;
        }
        return (
            <Auxi>
                <Modal show={this.state.purchasing} modalClosed={this.canclePurchaseHandler}>
                  {orderSummary}
                </Modal>
                {burger}

            </Auxi>
        );
    }
};

export default BurgerBuilder;