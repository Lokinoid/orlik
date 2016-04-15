import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

require('../styles/main.scss');

export default class MainView extends React.Component {
    render() {

        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
