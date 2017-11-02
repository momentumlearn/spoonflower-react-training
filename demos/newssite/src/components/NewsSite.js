import 'shoelace-css/dist/shoelace.css';
import '../App.css';

import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';
import NewsSources from './NewsSources';
import NewsStories from './NewsStories';
import {Route} from 'react-router';
import request from 'superagent';

const API_KEY = '48ee6a49fa6140bea9eb8ad74e973862';

class NewsSite extends Component {
    constructor() {
        super();
        this.state = {
            sources: null,
            stories: null
        }
    }

    loadSources() {
        return request
            .get("http://beta.newsapi.org/v2/sources?language=en&country=us")
            .set('X-API-Key', API_KEY)
            .end((err, res) => {
                const sources = res.body.sources;
                sources.forEach(source => source.active = true)
                this.setState({'sources': sources});
            })
    }

    loadStories() {
        let url = "http://beta.newsapi.org/v2/top-headlines?language=en&country=us";

        request
            .get(url)
            .set('X-API-Key', API_KEY)
            .end((err, res) => {
                this.setState({'stories': res.body.articles})
            })
    }

    componentWillMount() {
        this.loadSources();
        this.loadStories();
    }

    activeSources() {
        if (!this.state.sources) {
            return null;
        }
        return this
            .state
            .sources
        // .filter(function (source) { return source.active })
            .filter(source => source.active)
            .map(source => source.id);
    }

    storiesToShow() {
        if (!this.state.stories) {
            return null;
        }

        const sources = this.activeSources();

        return this
            .state
            .stories
            .filter(story => {
                return sources.indexOf(story.source.id) !== -1
            })
            .slice(0, 10);
    }

    onCheckSource(sourceId, active) {
        console.log("onCheckSource", sourceId, active);
        const sources = this.state.sources;
        const source = sources.find(source => source.id === sourceId);
        source.active = active;
        this.setState({sources: sources})
    }

    render() {
        const colStyle = {
            'overflowY': 'scroll',
            padding: '2em'
        };

        return (
            <div className="App">
                <div className="container">
                    <ul>
                        <li><NavLink to="/sources">Sources</NavLink></li>
                        <li><NavLink exact to="/">Stories</NavLink></li>
                    </ul>
                    <Route
                        path="/sources"
                        render={() => (
                            <NewsSources
                            sources={this.state.sources}
                            onCheck={this.onCheckSource.bind(this)}/>
                    )}/>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <NewsStories stories={this.storiesToShow()}/>
                        )} />
                </div>
            </div>
        );
    }
}

export default NewsSite;
