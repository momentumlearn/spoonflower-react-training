import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

class NewsStory extends Component {
    render() {
        const {story} = this.props;
        return (
            <div className="NewsStory">
                <h3 className="title">
                    {story.title}
                </h3>
                <div className="row info">
                    <div className="col">
                        <Link to={`/stories/${story.source.id}`}>
                            {story.source.name}
                        </Link>
                    </div>
                    <div
                        className="col"
                        style={{
                        textAlign: 'right'
                    }}>
                        {story.publishedAt && moment(story.publishedAt).format("lll")}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="description">
                            {story.description}
                        </div>
                        <div className="link">
                            <a target="_blank" href={story.url}>Read the whole story</a>
                        </div>
                    </div>
                    {story.urlToImage && <div className="col">
                        <div className="image">
                            <img src={story.urlToImage} alt={story.title}/>
                        </div>
                    </div>
}
                </div>
            </div>
        );
    }
}

export const storyPropTypes = {
    source: PropTypes.shape({
        id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string
};

NewsStory.propTypes = {
    story: PropTypes.shape(storyPropTypes)
};

export default NewsStory;
