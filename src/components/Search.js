import React, {Component} from 'react';
import './Search.css';
 class Search extends Component{
     constructor(props){
         super(props);
          this.state = {
              keyword: ""
          }
          this.onSearch = this.onSearch.bind(this);
     }
    
     onChange = (event) =>{
         var target = event.target;
         var name = target.name;
         var value = target.value;
         this.setState({
             [name]: value
         });
     }
     onSearch = () =>{
       // console.log(this.state);
        this.props.onSearch(this.state.keyword);
     }
    render(){
        var {keyword} = this.state;
        return(
            <div className="col">
                <div className="h">
                    <input
                    className="inputsearch"
                    name="keyword"
                    type="text"
                    class="form-control"
                    placeholder="input keyword"
                    value = { keyword }
                    onChange= {this.onChange }
                    />
                    <span>
                    <button 
                        className="btn btn-success"
                        type="button"
                        onClick={this.onSearch}
                    >search</button>
                    </span>
                    
                </div>
            </div>
        );
    }
 }
 export default Search;