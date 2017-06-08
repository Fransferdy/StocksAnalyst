
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavLink extends Component {
  render() {
    return ( 
        <li className={(this.props.active ? "active" : "")} ><Link to={this.props.href}>{this.props.text}</Link></li>
    );
  }
} 

export default NavLink;
