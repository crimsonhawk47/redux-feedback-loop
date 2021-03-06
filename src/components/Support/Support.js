import React, { Component } from 'react';
import { connect } from 'react-redux'
class Support extends Component {

    componentDidMount(){
        this.setState({
            support: this.props.reduxStore.feedback.support
        })
        
    }

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
                <input type="radio" value="1" onChange={this.logSupport} checked={this.state.support == 1} />
                <input type="radio" value="2" onChange={this.logSupport} checked={this.state.support == 2}/>
                <input type="radio" value="3" onChange={this.logSupport} checked={this.state.support == 3}/>
                <input type="radio" value="4" onChange={this.logSupport} checked={this.state.support == 4}/>
                <input type="radio" value="5" onChange={this.logSupport} checked={this.state.support == 5}/>
                <button onClick={this.handleClick}>Next</button>
                <button onClick={this.props.history.goBack}>Go Back</button>

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