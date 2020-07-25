import React, {Component} from 'react';
import CartItem from './CartItem';
import './Cart.css';

class Cart extends Component{
    constructor(){
        super();
        this.cart = JSON.parse(localStorage.getItem("cart"));

        if(!this.cart){
            this.cart = [];
        }
        {
            this.state = {
                 cart: this.cart
            }
        }
        this.onPlus = this.onPlus.bind(this);
        this.onMinus = this.onMinus.bind(this);
    }
    onPlus(item){
        return(event)=>{
            // console.log(this.state.cart);
            let cart = this.state.cart;
                 item.quantity++;
            // console.log(item);
            this.setState({
                cart:cart
            })
        }
    }
    onMinus(item){
        return(event)=>{
            let cart = this.state.cart;
            let oldItem = cart.find((element) => element.id === item.id);
            if(oldItem){
                oldItem.quantity -= 1;
              
            }
            localStorage.setItem("cart", JSON.stringify(cart));

            this.setState({
                cart:cart
            })

        }

    }
    onRemoveClick(item){
        return(event)=>{
            let cart = this.state.cart;
            let oldItem = cart.find((element) => element.id === item.id);
            cart.splice(cart.indexOf(oldItem),1);

            localStorage.setItem("cart", JSON.stringify(cart));
            this.setState({
                cart:cart
            })

        }

    }
   
    totalPrice(cart){
        let total = 0;
        let i = 0;
        for(i = 0; i< cart.length;i++){
             total+=cart[i].quantity * cart[i].price;
        }

        return total;
    }

    render(){
        return(
            <div>
                <div>
                    <table>
                    <tr>
                        
                        <th>Name Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                  
                       
                        {this.cart.map((item,index)=>
                        <CartItem 
                        item ={item}
                        onClick = {this.onRemoveClick(item)} 
                        onPlus = {this.onPlus(item)}
                        onMinus = {this.onMinus(item)}
                        /> ) }
                 
                    
                    </table>
                
                </div>
                <div className="tongtien">
                <p><b>Tong tien: {this.totalPrice(this.cart)} VND</b></p>
                </div>
            </div>

        );
    }
}
export default Cart;