
import React, { Component } from 'react';

class NumberInput extends Component {
  render() {
    return ( 
        <input type="number" name={this.props.name} placeholder={this.props.active}/>
    );
  }
} 

export default NumberInput;