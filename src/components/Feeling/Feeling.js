import React, {Component} from 'react';
class Feeling extends Component{

    handleClick = () => {
        console.log(`Hey`);
        
    }
 
    render(){
        return(
        <div>
            Hi I'm Feeling
            <button onClick={this.handleClick}>Next</button>
        </div>
        )
    
    }
}
export default Feeling