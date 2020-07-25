import React, {component, Component} from 'react';
import Search from './Search';

class Control extends Component{
    render(){
        return(
            <div className="row mt -15">
                <Search on ={this.props.onSearch}/>
            </div>
        );
    }
}
export default Control;