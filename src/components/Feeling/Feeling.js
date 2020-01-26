import React, { Component } from 'react';
import { connect } from 'react-redux'
class Feeling extends Component {

    componentDidMount(){
        this.setState({
            feeling: this.props.reduxState.feedback.feeling
        })
        
    }

    state = {
        feeling: false
    }

    handleClick = () => {
        if (Number(this.state.feeling)) {
            this.props.dispatch({
                type: 'feeling',
                payload: this.state.feeling
            })
            this.props.history.push('/Understanding');
        }
        else{
            alert('Please select a value')
        }
    }

    logFeelings = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    render() {
        console.log('feeling is ',this.state.feeling);
        
        return (
            <div>
                <h3>How are you feeling Today?</h3>
                <input type="radio" name="feels" value="1" onChange={this.logFeelings} />
                <input type="radio" name="feels" value="2" onChange={this.logFeelings} />
                <input type="radio" name="feels" value="3" onChange={this.logFeelings} />
                <input type="radio" name="feels" value="4" onChange={this.logFeelings} />
                <input type="radio" name="feels" value="5" onChange={this.logFeelings} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )

    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling)