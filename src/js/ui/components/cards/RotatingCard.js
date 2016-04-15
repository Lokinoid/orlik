import React from 'react';

export default class RotatingCard extends React.Component {
    
    render() {
        return (
            <div class='card-wrapper'>
                <div id='card-1' class='card-rotating effect__click'>
                    <div class='face card-rotating__front z-depth-1'>
                        <div class='card-up'>
                            <img src='http://mdbootstrap.com/images/reg/reg%20(5).jpg' class='img-responsive'/>
                        </div>
                        <div class='avatar'>
                            <img src='http://mdbootstrap.com/wp-content/uploads/2015/10/team-avatar-2.jpg' class='img-circle img-responsive'/>
                        </div>
                        <h4>Heading</h4>
                        <h5>Subheading</h5>
                        <a class='rotate-btn' data-card='card-1'><i class='fa fa-repeat'> Click here to rotate</i></a>
                    </div>
                    <div class='face card-rotating__back z-depth-1'>
                        <h4>Heading</h4>
                        <p class='card-content text-center'>Subheading</p>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                            <br>Lorem ipsum</br>
                        <a class='rotate-btn' data-card='card-1'><i class='fa fa-undo'> Click here to rotate back</i></a>
                        <div class='sm-container'>
                            <ul class='list-inline card-sm'>
                                <li><a class='icons-sm fb-ic'><i class='fa fa-facebook'></i></a></li>
                                <li><a class='icons-sm tw-ic'><i class='fa fa-twitter'></i></a></li>
                                <li><a class='icons-sm gplus-ic'><i class='fa fa-google-plus'></i></a></li>
                                <li><a class='icons-sm li-ic'><i class='fa fa-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}