import React, { Component } from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

class TopBar extends Component {
  render() {
    return ( 
      <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">{this.props.projectName}</Link>
            </div>
            <NavBar position="right" orientation="horizontal" navLinks={this.props.navLinks}/>
          </div>
      </nav>
    );
  }
} 

export default TopBar ;
