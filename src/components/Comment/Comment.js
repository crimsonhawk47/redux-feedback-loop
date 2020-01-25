import React, {Component} from 'react';
class Comment extends Component{

    handleClick = () => {
        console.log(`End`);
        
    }
 
    render(){
        return(
        <div>
            Hi I'm Comment
            <button onClick={this.handleClick}>Next</button>
        </div>
        )
    
    }
}
export default Comment