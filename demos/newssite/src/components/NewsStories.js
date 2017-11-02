import React, {Component} from "react";

import NewsStory from './NewsStory';

class NewsStories extends Component {
    render() {
        const loading = !this.props.stories;

        if (loading) {
            return (
                <div style={{
                    textAlign: 'center'
                }}>
                    <span className="loader loader-xl"></span>
                </div>
            )
        }

        return (
            <div className="NewsStories">
                {this
                    .props
                    .stories
                    .map((story, idx) => <NewsStory key={idx} story={story}/>)}
            </div>
        );
    }
}

export default NewsStories;
