import React, {Component} from 'react';
import {connect} from 'react-redux'
class Comment extends Component{

    componentDidMount(){
        this.setState({
            comment: this.props.reduxStore.feedback.comment
        })
        
    }

    state = {
        comment: ""
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
            <h3>Any other comments you'd like to add? (optional)</h3>
            <input type="text" value={this.state.comment || ''} placeholder="comments..." onChange={this.logComment}></input>
            <button onClick={this.handleClick}>Next</button>
            <button onClick={this.props.history.goBack}>Go Back</button>

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