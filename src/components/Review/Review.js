import React, {Component} from 'react';
import {axios} from 'axios'
import {connect} from 'react-redux'
class Review extends Component{

    submitForm = ()=>{
        let feedback = this.props.reduxStore.feedback;
        let feedbackToSend = {
            feeling: feedback.feeling,
            understanding: feedback.understanding,
            support: feedback.support,
            comment: feedback.comment
        }
        console.log(`POSTING OBJECT`);
        console.log(feedbackToSend);
        
        
        

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