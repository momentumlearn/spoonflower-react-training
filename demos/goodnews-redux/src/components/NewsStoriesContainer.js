import NewsStories from './NewsStories';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        stories: state.stories.filter(story => {
            return state.sources.selected.includes(story.source.id)
        }).slice(0, 10)
    }
}

export default connect(mapStateToProps)(NewsStories);
