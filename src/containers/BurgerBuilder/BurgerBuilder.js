import React, {Component} from "react";
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component{
    state={
        ingredients:{
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        }

    }
    render(){
        return(
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>Build Controls</div>
            </Auxi>
        );
    }
};

export default BurgerBuilder;