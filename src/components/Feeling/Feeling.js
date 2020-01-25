import React, {Component} from 'react';
class Feeling extends Component{

    state = {
        feels: 0
    }

    handleClick = () => {
        this.props.history.push('/Understanding');
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