import React, {Component} from 'react';
import ProductItem from './ProductItem';
import './Products.css';
import Control from './Control';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProduct from './EditProduct';

class Products extends Component{
    
    constructor(){
        super();
        this.products = JSON.parse(localStorage.getItem("lsc-products"));

        if(!this.products){
            this.products = [];
        }
        {
        this.state = {
            products: this.products,
            keyword: '',
            edit:''
        }
        }
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDsc= this.sortByPriceDsc.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDetailClick = this.onDetailClick.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
    }
    sortByPriceAsc=()=>{

        let sortedProductsAsc;
        sortedProductsAsc= this.state.products.sort((a,b)=>{
           return parseInt(a.price)  - parseInt(b.price);
        })
    
        this.setState({
            products:sortedProductsAsc
        })
      }
    
    
    sortByPriceDsc=()=>{
    
        let sortedProductsDsc;
        sortedProductsDsc= this.state.products.sort((a,b)=>{
           return parseInt(b.price)  - parseInt(a.price);
        })
        
        this.setState({
            products:sortedProductsDsc
        })
    }

    onAddClick(item){
        return(event)=>{
            let cart = JSON.parse(localStorage.getItem("cart"));

            if(!cart){
                cart = [];
            }

            let oldItem = cart.find((Element)=>Element.title == item.title);

            if(oldItem){
                oldItem.quantity += 1;

            }else{
                item.quantity=1;
                cart.push(item);
            }

            localStorage.setItem("cart",JSON.stringify(cart));
            console.log(cart);
        }
    }
    onSearch = (keyword) => {
        //console.log(keyword);
        this.setState({
          keyword : keyword
        })
      }
    onDeleteClick(item){
        return(event)=>{
            let products = this.state.products;
            let oldItem = products.find((element)=>element.id===item.id);
            products.splice(products.indexOf(item),1);

            localStorage.setItem("lsc-products",JSON.stringify(products));
            
            this.setState({
                products:products
            })
        }
    }
    onDetailClick(item){
        return(event)=>{
            
        }
    }
    onUpdateClick(item){
        return(event)=>{

            let edit = JSON.parse(localStorage.getItem("edit"));

            if(!edit){
                edit = [];
            }
            edit.push(item);

            localStorage.setItem("edit",JSON.stringify(edit));
           

            this.setState({
                edit: "edit"
              })

        }
    }
    render(){
        var {products,keyword} = this.state;
        if(keyword){
            let products = JSON.parse(localStorage.getItem("lsc-products"));
            let a = keyword.toLowerCase();
            let b = [];
            let i = 0;
            for(i = 0; i<products.length; i++){
                if(products[i].title.toLowerCase().indexOf(a) !== -1 ){
                    b.push(products[i]);
                }
            }
            return(
                <div>
                         {b.map((item)=>
                         
                         <ProductItem 
                             item ={item}
                             onClick = {this.onAddClick(item)}
                             onDeleteClick = {this.onDeleteClick(item)}
                            
                         />
                       )
                     }
                </div>
               
            );
          }
        
        return(
            <div>
                
                <div className="btsort">
                     <button className="btn btn-dark" onClick={this.sortByPriceDsc}>SortDown</button>
                     <button className="btn btn-info" onClick={this.sortByPriceAsc}>Sortup</button>
                     <Control onSearch ={this.onSearch}/>
                </div>
                 <div className="container" >
                     
                    {this.products.map((item)=>
                         
                        <ProductItem 
                            item ={item}
                            onClick = {this.onAddClick(item)}
                            onDeleteClick = {this.onDeleteClick(item)}
                            onDetailClick = {this.onDeleteClick(item)}
                            onUpdateClick = {this.onUpdateClick(item)}
                        />
                      )
                    }
               
                
                </div>
                <div className="formupdate">
                  {this.state.edit == "edit" ?  <EditProduct />: null}
                </div>
                
            </div>
           
        );
    }
}
export default Products