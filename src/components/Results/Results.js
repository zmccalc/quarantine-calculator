import React, { Component } from 'react';
import './Results.css';
import Button from '@material-ui/core/Button';

class Results extends Component {

  render() {
    return (
      <div className="results">
          <div className="resultsTextDiv">
            <h2 className="resultsText">There is {this.props.calculationResult}% chance your classes will go virtual in the fall of 2020.</h2>
          </div>
          <div className="resultsButtonDiv">
            <Button variant="contained" className="welcomeButton" onClick={this.props.handler} fullWidth={true}>Return</Button>
          </div>
      </div>
    );
  }
}

export default Results;