import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this component can be chaged to functional if we don't use componentDidUpdate
    /*
    componentDidUpdate() {
        console.log('OrderSummary got updated');
    }
    */

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {this.props.ingredients[igkey]}
                </li>
        });

        return ( 
            <Aux>
                <h3 style={{textAlign: 'center'}}>Your Order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul>
                    { ingredientSummary }
                </ul>
                <p><strong>Total Price : $ {this.props.price.toFixed(2)} </strong></p>
                <p>Continue to Check out</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}
 
export default OrderSummary;