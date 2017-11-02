import {connect} from 'react-redux';
import NewsStories from "../components/NewsStories";

const mapStateToProps = (state, ownProps) => {
    let stories = state.stories || [];
    
    if (ownProps.sourceId) {
        stories = stories.filter(story => {
            return story.source.id === ownProps.sourceId
        });
    } else {
        let activeSources;
        
        if (state.sources) {
            activeSources = state
                .sources
                .filter(source => source.active)
                .map(source => source.id);
        }

        stories = stories.filter(story => {
            return activeSources.indexOf(story.source.id) !== -1
        }).slice(0, 10);
    }

    return {stories: stories}
}

export default connect(mapStateToProps)(NewsStories);
