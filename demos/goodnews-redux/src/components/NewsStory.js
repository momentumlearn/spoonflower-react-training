import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

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
                        {moment(story.publishedAt).format("lll")}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="description">
                            {story.description}
                        </div>
                        <div className="link">
                            <a target="_blank" href={story.url}>Read the whole story</a>
                        </div>
                    </div>
                    {story.urlToImage && <div className="col-4">
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

NewsStory.propTypes = {
    story: PropTypes.shape({
        source: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string
    })
}

export default NewsStory;
