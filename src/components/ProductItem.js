import React, {Component} from 'react';
import './Products.css';

class ProductItem extends Component{

    
    render(){
        const {item,onClick,onDeleteClick,onDetailClick,onUpdateClick} = this.props;
       
        return(
            <div className="container">        
            <div className="row">
                <div className="coo" id="khung">
                    <img className="img" src={"Image/" +this.props.item.image} />
                    <h3 className="">{item.title}</h3>
                    <p>{item.price} VND</p>
                    <button className="btn btn-warning" onClick={onClick} type="button">ADD</button>
                    <button type="button" className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                    <button className="btn btn-success" onClick={onDetailClick} type="button">detail</button>
                   <button className="btn btn-info" onClick={onUpdateClick}>Update</button>
                </div>
            </div>    
            </div>
          
        );
    }
}
export default ProductItem;

