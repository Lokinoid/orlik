import React from 'react';
require('../styles/main.scss');


export default class Label extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div class='row'>
                    <div class='col-xs-8 label-container'>
                        <div class='row'>
                            <div class='col-xs-12 label-container'>Text</div>
                        </div>
                        <div class='row'>
                            <div class='col-xs-12 label-container'>Text</div>
                        </div>
                        <div class='row'>
                            <div class='col-xs-12 label-container'>Text</div>
                        </div>
                    </div>
                    <div class='col-xs-4 label-container'>Text</div>
                </div>
            </div>
        );
    }
}
