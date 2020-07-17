import React, { Component } from 'react';
import './Modal.css';
import Button from '@material-ui/core/Button';

class Modal extends Component {

  render() {
    return (
      <div className="modal">
          <div className="modalBox">
            <h1>{this.props.text}</h1>
            <div className="modalButtonDiv">
              <Button variant="contained" onClick={this.props.handler}>Okay</Button>
            </div>
          </div>
      </div>
    );
  }
}

export default Modal;