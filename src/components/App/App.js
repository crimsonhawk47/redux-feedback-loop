import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';

//Importing Components
import Feeling from '../Feeling/Feeling'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route path="/feel">
            <Feeling />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
