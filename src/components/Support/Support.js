import React, { Component } from 'react';
import { connect } from 'react-redux'
class Support extends Component {

    state = {
        support: false
    }

    handleClick = () => {
        if (this.state.support){
            this.props.dispatch({
                type: 'support',
                payload: this.state.support
            })
            this.props.history.push('/Comment');
        }
        else{
            alert('Please select a value')
        }
    }

    logSupport = (event) => {
        this.setState({
            support: event.target.value
        })

    }



    render() {
        return (
            <div>
                <h3>How well do you feel supported by staff?</h3>
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
    return (
        {
            reduxStore
        }
    )
}

export default connect(mapStateToProps)(Support)