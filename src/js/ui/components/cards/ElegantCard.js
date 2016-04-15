import React from 'react';

export default class ElegantCard extends React.Component {
    
    render() {
        return (
            <div class='elegant-card z-depth-1 hoverable'>
                <div class='card-up view overlay hm-white-slight'>
                    <h5 class='card-label'><span class='label rgba-black-light'>Category 1</span></h5>
                    <a>
                        <img src='http://mdbootstrap.com/images/regular/nature/img%20(48).jpg' class='img-responsive'/>
                    </a>
                    <div class='mask waves-effect waves-light'>
                    </div>
                </div>
                <a class='btn-floating btn-large waves-effect waves-light stylish-color'>
                    <i class='fa fa-chevron-right'>
                    </i>
                </a>
                <div class='card-content'>
                    <h5>Lorem ipsium</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id amet, quisquam modi nobis nostrum iusto incidunt dolore assumenda delectus officia quia, sequi eum perspiciatis architecto. Ullam voluptatum, facere nihil quidem.</p>
                </div>
                <div class='card-footer'>
                    <ul class='list-inline'>
                        <li><i class='fa fa-clock-o'></i>05/10/2015</li>
                        <li><a href='#'><i class='fa fa-comments-o'></i>12</a></li>
                        <li><a href='#'><i class='fa fa-facebook'> </i>21</a></li>
                        <li><a href='#'><i class='fa fa-twitter'> </i>5</a></li>
                    </ul>
                </div>
            </div>
        );
    };
}