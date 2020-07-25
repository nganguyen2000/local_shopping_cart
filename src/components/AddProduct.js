import React, {Component} from 'react';
import './AddProduct.css';
class AddProduct extends Component{

    constructor(props) {
        super(props);
        
      }
    onAddProduct(event){
        event.preventDefault();

        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let value =  event.target["value"].value;
        let image = event.target["image"].files.item(0).name;

        let id = JSON.parse(localStorage.getItem("id-product"));

        if(!id){
             id =1;
        }
        
       
        let product = {
            id: id++,
            title:title,
            price:price,
            type:value,
            image: image
            
        }

        let products = JSON.parse(localStorage.getItem("lsc-products"));

        if(!products){
            products = [];

        }

        products.push(product);
        localStorage.setItem("lsc-products",JSON.stringify(products));
        localStorage.setItem("id-product",id++);
        console.log(products);
    }
     
    
    render(){
        return(
            <center>
                <hr></hr>
                <form className="form" onSubmit={this.onAddProduct}>
                <br />
                <input name="title" placeholder="title" className="input" />
                <br />
                <br />
                <input name="price" placeholder="price" className="input" />
                <br />
                <br />
                <select name="value">
                    <option value="hat">hat</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="shoes">shoes</option>
                </select>
                <br/>
                <br />
                <input type="file" name="image"/>
                <button className="btn btn-success">add</button>
            </form>
            </center>
           
        );
    }
}
export default AddProduct;