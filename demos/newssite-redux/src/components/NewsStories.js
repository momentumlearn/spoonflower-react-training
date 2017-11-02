import React, {Component} from "react";
import NewsStory, {storyPropTypes} from './NewsStory';
import PropTypes from 'prop-types';

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
                    .slice(0, 10)
                    .map((story, idx) => <NewsStory key={idx} story={story}/>)}
            </div>
        );
    }
}

NewsStories.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.shape(storyPropTypes))
}

export default NewsStories;
