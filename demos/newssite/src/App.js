import React, {Component} from 'react';
import request from 'superagent';
import NewsSources from './components/NewsSources';
import NewsStories from './components/NewsStories';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

const API_KEY = '48ee6a49fa6140bea9eb8ad74e973862';

class App extends Component {
    constructor() {
        super();
        this.state = {
            sources: null,
            stories: null
        }
    }

    loadSources(callback) {
        if (!callback) {
            callback = function () {};
        }

        return request
            .get("http://beta.newsapi.org/v2/sources?language=en")
            .set('X-API-Key', API_KEY)
            .end((err, res) => {
                const sources = res.body.sources;
                sources.forEach(source => source.active = true)
                this.setState({
                    'sources': sources
                }, callback);
            })
    }

    loadStories() {
        let url = "http://beta.newsapi.org/v2/top-headlines?language=en";

        request
            .get(url)
            .set('X-API-Key', API_KEY)
            .end((err, res) => {
                this.setState({'stories': res.body.articles})
            })
    }

    componentWillMount() {
        this.loadSources(this.loadStories.bind(this));
    }

    activeSources() {
        if (!this.state.sources) {
            return null;
        }
        return this
            .state
            .sources
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
                <div
                    className="container"
                    style={{
                    height: '100vh',
                    display: 'flex'
                }}>
                    <div
                        className="row"
                        style={{
                        flex: 1,
                        display: 'flex'
                    }}>
                        <div className="col-3" style={colStyle}>
                            <NewsSources
                                sources={this.state.sources}
                                onCheck={this
                                .onCheckSource
                                .bind(this)}/>
                        </div>
                        <div className="col-9" style={colStyle}>
                            <NewsStories stories={this.storiesToShow()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
