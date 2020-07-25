import React, {Component} from 'react';

class CartItem extends Component{
    constructor(){
        super();
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(!this.cart){
            this.cart = [];
        }
         this.state = {
                 cart: this.cart
        }
    
       
    }
   
   
   
    
    render(){
        const {item,onClick,onPlus,onMinus} = this.props;
       

        return(                
                <tr>
                   
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td><button onClick={onPlus}>+</button>{item.quantity}<button onClick={onMinus}>-</button></td>
                    <td><button onClick={onClick} type="button">Remove</button></td>
                </tr>
                );
    }
}
export default CartItem;