import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title.js';
import Hero from './components/Hero/Hero.js';
import Results from './components/Results/Results.js';
import Disclaimer from './components/Disclaimer/Disclaimer.js';
import firebase from 'firebase/app';
import 'firebase/database'; 

var config = {
  apiKey: "AIzaSyByY9ikyCman4k5u_Okn8qWTdZcWt7a0wM",
  authDomain: "zoom-class-calculator.firebaseapp.com",
  databaseURL: "https://zoom-class-calculator.firebaseio.com",
  projectId: "zoom-class-calculator",
  storageBucket: "zoom-class-calculator.appspot.com",
  messagingSenderId: "715324641890",
  appId: "1:715324641890:web:5374a1d26064b3bdb8773b",
  measurementId: "G-SWPH29BT8G"
};
firebase.initializeApp(config);

class App extends Component {

  state = {
    collegeName: "",
    showResults: false,
    result: 0
  }

  //Hero Handlers
  changeCollegeName = (name) => {
    this.setState({collegeName: name})
  }

  calculatePressed = () => {
    this.setState({showResults: true})
  }

  changeResult = (num) => {
    this.setState({result: num})
  }

  //Results Handlers
  returnPressed = () => {
    this.setState({showResults: false})
  }

  renderContent = () => {
    if (this.state.showResults === false) {
      return <Hero 
              handleNameChange={this.changeCollegeName} 
              handleCalculatePressed={this.calculatePressed} 
              handleResultChange={this.changeResult}
            />
    } else {
      return <Results 
              handler={(this.returnPressed)} 
              handler1={this.changeResult} 
              calculationResult={this.state.result} 
              schoolName={this.state.collegeName}
            />
    }
  }

  render() {
    return (
      <div className="app">
          <Title/>
          {this.renderContent()}
          <Disclaimer/>
      </div>
    );
  }
}

export default App;
