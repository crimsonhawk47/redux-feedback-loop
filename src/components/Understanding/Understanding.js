import React, { Component } from 'react';
import {connect} from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: false
    }

    
    handleClick = () => {
        
        this.props.history.push('/Support');
        this.props.dispatch({
            type: 'understanding',
            payload: this.state.understanding
        })
    }

    logUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="radio" name="understanding" value="1" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="2" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="3" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="4" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="5" onChange={this.logUnderstanding} />
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



export default connect(mapStateToProps)(Understanding)