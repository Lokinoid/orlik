import React from 'react';

export default class ImageCard extends React.Component {
    
    render() {
        return (
            <div class='card hoverable'>
                <div class='card-image'>
                    <div class='view overlay hm-white-slight z-depth-1'>
                        <img src='http://mdbootstrap.com/images/reg/reg%20(2).jpg' class='img-responsive' alt=''></img>
                        <a href='#'>
                            <div class='mask waves-effect'></div>
                        </a>
                    </div>
                </div>
                <div class='card-content'>
                    <h5>Card title</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id amet, quisquam modi nobis nostrum iusto incidunt dolore assumenda delectus officia quia, sequi eum perspiciatis architecto. Ullam voluptatum, facere nihil quidem.</p>
                </div>
                <div class='card-btn text-center'>
                    <a href='#' class='btn btn-primary btn-md waves-effect waves-light'>Read more</a>
                    <a href='#' class='btn btn-default btn-md waves-effect waves-light'>Buy now</a>
                </div>
            </div>
        );
    };
}