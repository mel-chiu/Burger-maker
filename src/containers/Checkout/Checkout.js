import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component{
    state={
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0

        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients:ingredients});
    }
    checkoutContinuedHandler=()=>{
        this.props.history.replace("/checkout/contact-data");
    }
    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutContinued={this.checkoutContinuedHandler}
                checkoutCancelled={this.checkoutCancelledHandler}/>
            </div>
        )
    }
}

export default Checkout;