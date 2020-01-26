import React, {Component} from 'react';
import {connect} from 'react-redux'
class Review extends Component{

    submitForm = ()=>{
        

    }
 
    render(){
        return(
        <div>
            <p>Feelings: {this.props.reduxStore.feedback.feeling}</p>
            <p>Understanding: {this.props.reduxStore.feedback.understanding}</p>
            <p>Support: {this.props.reduxStore.feedback.support}</p>
            <p>Comments: {this.props.reduxStore.feedback.comment}</p>
            <button onClick={this.submitForm}>Submit?</button>
        </div>
        )
    
    }
}

const mapStateToProps = (reduxStore) =>{
    return(
        {reduxStore}
    )
}

export default connect(mapStateToProps)(Review)