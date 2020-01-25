import React, {Component} from 'react';
class Understanding extends Component{

    handleClick = () => {
        this.props.history.push('/Support');
    }
 
    render(){
        return(
        <div>
            Hi I'm understanding
            <button onClick={this.handleClick}>Next</button>
        </div>
        )
    
    }
}
export default Understanding