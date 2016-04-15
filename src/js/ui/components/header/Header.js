import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from "material-ui/lib/styles/getMuiTheme";
import RawTheme from '../Theme';
import Menu from './Menu';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
 

export default class Header extends React.Component {

  //the key passed through context must be called "muiTheme"
  static childContextTypes =  {
    muiTheme: React.PropTypes.object
  }

  constructor() {
    super();
  }
  
  getChildContext() {
    return {
      muiTheme: getMuiTheme(RawTheme),
    };
  }

  render () {
    const logoStyle = {
      marginLeft: '20px',
      width: '50px',
      height: '50px'
    };
    
    const titleStyle = {
      textAlign: 'center',
      height: '100%'
    };
    
    return (
      <Navbar class='header'>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#">Orlik</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Services</NavItem>
          <NavItem eventKey={1} href="#">Blog</NavItem>
          <NavItem eventKey={1} href="#">Team</NavItem>
          <NavItem eventKey={1} href="#">Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
