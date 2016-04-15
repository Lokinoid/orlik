import React from 'react';
import ImageCard from './cards/ImageCard';
import ElegantCard from './cards/ElegantCard';
import RotatingCard from './cards/RotatingCard';
import Stage from './body/Stage';


export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main>
                <Stage />
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="assets/img/logo.svg" class="img-responsive"></img>
                        </div>
                    </div>
                    <div class="row">    
                        <div class="col-md-12">
                            <h4>Material Design for Bootstrap</h4>
                            <p>Google designed a Material Design to make a web more beautiful. Twitter created a Bootstrap to support you in faster and easier development of responsive websites. Material Design for Bootstrap contains both!</p>
                            <a href="http://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-info waves-effect waves-light ">Get it now!</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <ImageCard />
                        </div>
                        <div class="col-md-4">
                            <ElegantCard />
                        </div>
                        <div class="col-md-4">
                            <RotatingCard />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
