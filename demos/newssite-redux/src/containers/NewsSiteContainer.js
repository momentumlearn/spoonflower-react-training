import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import NewsSite from "../components/NewsSite";
import {fetchStories, fetchSources, toggleSource} from '../actions';

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStories: () => dispatch(fetchStories()),
        fetchSources: () => dispatch(fetchSources()),
        toggleSource: (payload) => dispatch(toggleSource(payload))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsSite));
