import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import NewsSources from '../containers/NewsSourcesContainer';
import NewsStories from '../containers/NewsStoriesContainer';
import NavBar from '../containers/NavBarContainer';

import 'shoelace-css/dist/shoelace.css';
import '../App.css';

class NewsSite extends Component {
    componentWillMount() {
        this.props.fetchSources();
        this.props.fetchStories();
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container main">
                    <Route exact path="/" render={() => (
                        <NewsStories />
                    )}/>
                    <Route path="/sources" render={() => (
                        <NewsSources/>
                    )}/>
                    <Route path="/stories/:sourceId" render={({match}) => (
                        <NewsStories sourceId={match.params.sourceId}/>
                    )}/>
                </div>
            </div>
        );
    }
}

export default NewsSite;
