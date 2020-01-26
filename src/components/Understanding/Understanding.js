import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: false
    }


    handleClick = () => {
        if (this.state.understanding) {
            this.props.dispatch({
                type: 'understanding',
                payload: this.state.understanding
            })
            this.props.history.push('/Support');
        }
        else{
            alert('Please select a value')
        }
    }

    logUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>How well are you understanding the material?</h3>
                <input type="radio" name="understanding" value="1" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="2" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="3" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="4" onChange={this.logUnderstanding} />
                <input type="radio" name="understanding" value="5" onChange={this.logUnderstanding} />
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



export default connect(mapStateToProps)(Understanding)