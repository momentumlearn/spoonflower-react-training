import 'shoelace-css/dist/shoelace.css';
import './App.css';

import React, {Component} from 'react';

import NavBar from './components/NavBar';
import NewsSourcesContainer from './components/NewsSourcesContainer';
import NewsStoriesContainer from './components/NewsStoriesContainer';
import {Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">

                <NavBar/>
                <div className="container main">
                <Route path="/sources" component={NewsSourcesContainer} />
                <Route exact path="/" component={NewsStoriesContainer} />
                </div>
            </div>
        );
    }
}

export default App;
