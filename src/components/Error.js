import React, {Component} from 'react';
import {Link} from 'react-router';


class Error extends Component {
  render() {
    return (
      <h1 style={{fontSize:'50px',position:'fixed',left:'45%',top:'45%'}}>
        404
      </h1>
    )
  }
}

export default Error;