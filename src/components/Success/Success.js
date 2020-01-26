import React, { Component } from 'react';
import {connect} from 'react-redux'
class Success extends Component {

    returnHome = () => {
        this.props.dispatch({
            type: 'reset'
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Thanks for your feedback!</h2>
                <button onClick={this.returnHome}>Start New Survey</button>
            </div>
        )

    }
}
export default connect()(Success)