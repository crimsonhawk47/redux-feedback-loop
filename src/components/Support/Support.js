import React, {Component} from 'react';
import {connect} from 'react-redux'
class Support extends Component{

    state = {
        support: false
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'support',
            payload: this.state.support
        })
        this.props.history.push('/Comment');
    }

    logSupport = (event) => {
        this.setState({
            support: event.target.value
        })
        
    }

    
 
    render(){
        return(
        <div>
            <input type="radio" name="support" value="1" onChange={this.logSupport} />
            <input type="radio" name="support" value="2" onChange={this.logSupport} />
            <input type="radio" name="support" value="3" onChange={this.logSupport} />
            <input type="radio" name="support" value="4" onChange={this.logSupport} />
            <input type="radio" name="support" value="5" onChange={this.logSupport} />
            
            <button onClick={this.handleClick}>Next</button>
        </div>
        )
    
    }
}

const mapStateToProps = (reduxStore) => {
    return(
        {
            reduxStore
        }
    )
}

export default connect(mapStateToProps)(Support)