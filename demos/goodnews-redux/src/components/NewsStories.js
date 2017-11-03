import React, { Component } from "react";

import NewsStory from './NewsStory';

class NewsStories extends Component {
    render() {
        const { stories } = this.props;
        return (<div className="NewsStories">
            {stories.map((story, idx) => (
                <NewsStory story={story} key={idx} />
            ))}
        </div>)
    }
}

export default NewsStories;
