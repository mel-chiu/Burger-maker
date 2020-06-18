import React, {Component} from "react";
import Auxi from '../../HOC/Auxi';


class BurgerBuilder extends Component{

    render(){
        return(
            <Auxi>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxi>
        );
    }
};

export default BurgerBuilder;