import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

  render() {
    return (
      <div className="title">
          <h1 className="titleH1">C-19 Calculator</h1>
          <h1 className="titleH2">Calculate if and when you'll be attending Zoom University</h1>
          <div className="blackLine"/>
      </div>
    );
  }
}

export default Title;
