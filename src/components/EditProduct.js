import React, {Component} from 'react';

class EditProduct extends Component{
    constructor(){
        super();
        this.edit = JSON.parse(localStorage.getItem("edit"));
       
        
        this.state = {
            edit: this.edit
            
        }

    }

    onUpdateProduct(event){
       
        event.preventDefault();

        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let image = event.target["image"].files.item(0).name;

       
        let product = {
            id: 7,
            title:title,
            price:price,
            type:'',
            image: image
            
        }


        let products = JSON.parse(localStorage.getItem("lsc-products"));

        if(!products){
            products = [];

        }
        
    



        products.push(product);
        localStorage.setItem("gfdsgd",JSON.stringify(products));
       
        console.log(products);
    }
     
    render(){
        var {edit} = this.state;
        return(
            <div>
                <h1>Update Product</h1>
                <div className="form-update">
                    {
                    this.state.edit.map(icart=>
                            <form className="form" onSubmit={this.onUpdateProduct}>
                            <label for="title">Name Product</label>
                            <input type="" name="name" value={icart.title}/><br/>
                            <label for="price">Price Product</label>
                            <input type="number" name="price" value={icart.price}/><br/>
                            <label for="image">Image</label>
                            <input type="file" name="image" value={icart.file}/><br/>
                            <button type="button">Update</button>
                        </form>
                        )
                    }
             </div>
         
  </div>
            
        );
    }
}
export default EditProduct;


