import React, {Component} from 'react';
import {connect} from 'react-redux'
class Comment extends Component{

    state = {
        comment: false
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'comment',
            payload: this.state.comment
        })
        this.props.history.push('/Review');
    }

    logComment = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }
 
    render(){
        return(
        <div>
            Any other comments you'd like to add?
            <input placeholder="comments..." onChange={this.logComment}></input>
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

export default connect(mapStateToProps)(Comment)