import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title.js';
import Hero from './components/Hero/Hero.js';
import Results from './components/Results/Results.js';

class App extends Component {

  state = {
    showResults: false,
    result: 0
  }

  //Hero Handlers
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
      return <Hero handleCalculatePressed={this.calculatePressed} handleResultChange={this.changeResult}/>
    } else {
      return <Results handler={(this.returnPressed)} handler1={this.changeResult} calculationResult={this.state.result}/>
    }
  }

  render() {
    return (
      <div className="app">
          <Title/>
          {this.renderContent()}
      </div>
    );
  }
}

export default App;
