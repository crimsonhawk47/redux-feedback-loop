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
