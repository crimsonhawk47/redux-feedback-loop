import React, {Component} from 'react';
class Support extends Component{

    handleClick = () => {
        this.props.history.push('/Comment');
    }
 
    render(){
        return(
        <div>
            Hi I'm Support
            <button onClick={this.handleClick}>Next</button>

        </div>
        )
    
    }
}
export default Support