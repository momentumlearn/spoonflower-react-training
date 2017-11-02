import React, {Component} from 'react';
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
                        {story.source.name}
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
export default NewsStory;
