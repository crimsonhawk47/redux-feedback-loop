import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
class Review extends Component {

    submitForm = () => {
        let feedback = this.props.reduxStore.feedback;
        let feedbackToSend = {
            feeling: feedback.feeling,
            understanding: feedback.understanding,
            support: feedback.support,
            comment: feedback.comment
        }
        axios.post('/feedback', feedbackToSend)
            .then(() => {
                this.props.history.push('/Thanks')
            }).catch((err)=>{
                console.log(err);
                
            })
    }

    render() {
        return (
            <div>
                <p>Feelings: {this.props.reduxStore.feedback.feeling}</p>
                <p>Understanding: {this.props.reduxStore.feedback.understanding}</p>
                <p>Support: {this.props.reduxStore.feedback.support}</p>
                <p>Comments: {this.props.reduxStore.feedback.comment}</p>
                <button onClick={this.submitForm}>Submit?</button>
                <button onClick={this.props.history.goBack}>Go Back</button>

            </div>
        )

    }
}

const mapStateToProps = (reduxStore) => {
    return (
        { reduxStore }
    )
}

export default connect(mapStateToProps)(Review)