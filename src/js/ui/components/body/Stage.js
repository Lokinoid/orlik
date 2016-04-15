import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Watcher from '../../../watcher/Watcher';

export default class Stage extends React.Component {
    
    constructor() {
        super();
        this._watcher = new Watcher();
    }
    
    render() {
        return(
            <div class='stage'>
                <Image src="assets/img/morning.jpg" responsive />
                <Grid class='stage-label'>
                    <Row>
                        <Col xs={12} md={12}>
                        {this._watcher.Run()}}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
