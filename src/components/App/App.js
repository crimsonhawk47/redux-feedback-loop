import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';

//Importing Components
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comment from '../Comment/Comment'
import Review from '../Review/Review'
import Success from '../Success/Success'

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
        </div>
        <Route path="/" exact component={Feeling} />
        <Route path="/Understanding" exact component={Understanding} />
        <Route path="/Support" exact component={Support} />
        <Route path="/Comment" exact component={Comment} />
        <Route path="/Review" exact component={Review} />
        <Route path="/Thanks" exact component={Success} />
      </Router>
    );
  }
}

export default App;
