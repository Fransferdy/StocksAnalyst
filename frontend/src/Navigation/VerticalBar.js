import React, { Component } from 'react';
import NavBar from './NavBar';
import './Navigation.css';


class VerticalBar extends Component {
  render() {
    return ( 
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar">
           <NavBar position="left" orientation="vertical" navLinks={this.props.navLinks}/>
        </div>
        </div>
        </div>
    );
  }
} 

export default VerticalBar ;
