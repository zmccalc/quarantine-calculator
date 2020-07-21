import React, { Component } from 'react';
import './Disclaimer.css';

class Disclaimer extends Component {

  render() {
    return (
      <div className="disclaimer">
          <h4>
            Disclaimer: This is a data exploration by a curious college student. It is in no way a foolproof prediction of what your school is planning to do; please do not base any of your plans off of this model.
          </h4>
      </div>
    );
  }
}

export default Disclaimer;