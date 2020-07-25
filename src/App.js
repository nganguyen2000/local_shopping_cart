import React,{Component} from 'react';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Cart from './components/Cart';
import './components/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";


class App extends Component{
  constructor(){
    super();
    this.state = {
      menu: "products"
     
    }
   
    this.onProductsClicked = this.onProductsClicked.bind(this);
    this.onAddProductClicked = this.onAddProductClicked.bind(this);
   this.onCartClicked = this.onCartClicked.bind(this);
   
  }

  
  onProductsClicked(){
    this.setState({
      menu: "products"
    })
  }
  onAddProductClicked(){
    this.setState({
      menu: "add-product"
    })
  }
  onCartClicked(){
    this.setState({
      menu: "cart"
    })
  }

  
  // onSortClicked(){
  //   let products = JSON.parse(localStorage.getItem("lsc-products"));
  //   if(!products){
  //     products = [];
  //   }
  //   let i = 0, j = 1;
  //   for(i=0; i<products.length; i++){
  //     for(j = i+1; j <products.length-1; j++){
  //       if(products[i].price>products[j].price){
  //         let a = [];
  //          a = products[j];
  //         products[j] = products[i];
  //         products[i] = a;
  //       }
  //     }
  //   }
  //   localStorage.setItem("products",JSON.stringify(products));
  //   this.setState({
  //     menu:"products"
  //   })

  // }


  render(){
   
    return(
      <div className="App">
      <div className="Menu">

        <center >  
          <div className="space">
            <button className="btn btn-info" onClick={this.onProductsClicked}>Products</button>
            <button className="btn btn-warning" onClick={this.onAddProductClicked}>Add Product</button>
            <button className="btn btn-success" onClick={this.onCartClicked}>Cart</button>
          </div>
            
      </center>
      </div>
     
      {this.state.menu == "add-product" ?  <AddProduct/>: null}
      {this.state.menu == "products" ?  <Products />: null}
      {this.state.menu == "cart" ?  <Cart />: null}

     
    </div>
     
    );
  }
}
export default App;
