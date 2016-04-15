import React from 'react';


export default class Footer extends React.Component {

    render() {
        return(
            <div class='footer'>
                <ul class='inline'>
                    <li><a href='#'>Item 1</a></li>
                    <li><a href='#'>Item 2</a></li>
                    <li><a href='#'>Item 3</a></li>
                </ul>
                <p>Copyright (c) Orlik</p>
            </div>
        );
    }
}
