import { deselectSources, selectSources } from '../actions';

import NewsSources from './NewsSources';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sources: state.sources.info,
        selected: state.sources.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeselectAll: () => {
            dispatch(deselectSources())
        },
        onSelectAll: () => {
            dispatch(selectSources())
        },
        onCheckSource: (sourceId, selected) => {
            if (selected) {
                dispatch(selectSources([sourceId]))
            } else {
                dispatch(deselectSources([sourceId]))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);
