import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { Provider } from 'react-redux'

const feedback = (state = {}, action) => {
    if (action.type === 'feeling') {
        return (
            {
                ...state,
                feeling: action.payload
            }
        )
    }

    if (action.type === 'understanding'){
        return(
            {
                ...state,
                understanding: action.payload
            }
        )
    }

    if (action.type === 'support'){
        return(
            {
                ...state,
                support: action.payload
            }
        )
    }

    if (action.type === 'comment'){
        return(
            {
                ...state,
                comment: action.payload
            }
        )
    }
    return state
}


const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
