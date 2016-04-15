import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from "material-ui/lib/styles/getMuiTheme";
import RawTheme from '../Theme';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';


export default class Menu extends React.Component {

  static childContextTypes =  {
    muiTheme: React.PropTypes.object
  }

  constructor() {
    super();
    this.title = 'Orlik';
    this.buttonLabel = 'About us';
  }
  
  getChildContext() {
    return {
      muiTheme: getMuiTheme(RawTheme),
    };
  }

  render () {
    const appParams = {
      title: this.title,
      showMenuIconButton: false      
    };
    
    const titleStyle = {
        textAlign: 'center'
    };
    
    const rowStyle = {
      margin: ''
    }
    
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>{'Orlik'}</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            
          </Col>
        </Row>
      </Grid>
    );  }
}
