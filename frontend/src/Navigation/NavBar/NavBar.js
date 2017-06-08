
import React, { Component } from 'react';
import NavLink from './NavLink';
import '../Navigation.css';


function absolute(base, relative) {
  if (relative[0]==='/')
    return relative;
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] === "#")
            continue;
        if (parts[i] === ".")
            continue;
        if (parts[i] === "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}


class Navbar extends Component {
  render() {
    var navBarClass;
    if (this.props.orientation==="horizontal")
      navBarClass = "nav navbar-nav navbar-"+this.props.position;
    else
      navBarClass = "nav nav-sidebar text-"+this.props.position;
    
    return (
      <div id="navbar">
          <ul className={navBarClass}>
           {this.props.navLinks.map(function(object,i){
                      return <NavLink key={i} href={object.href} text={object.text} active={absolute("/",object.href)===window.location.pathname}/>;
                  })} 
          </ul>
      </div>
    );
  }
} 

export default Navbar ;
