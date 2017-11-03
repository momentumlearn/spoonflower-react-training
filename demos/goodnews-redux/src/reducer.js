import {DESELECT_SOURCES, RECEIVE_SOURCES, RECEIVE_STORIES, RESET_DATA, SELECT_SOURCES} from './actions';

import {combineReducers} from 'redux';

const initialSources = {
    info: [],
    selected: []
}

const removeDuplicates = (array) => {
    return [...new Set(array)];
}

const sourcesReducer = (sources = initialSources, action) => {
    switch (action.type) {
        case RESET_DATA:
            return initialSources;
        case RECEIVE_SOURCES:
            const allSources = action.payload;
            let selectedSources = sources.selected;
            if (sources.selected.length === 0) {
                selectedSources = allSources.map(source => source.id);
            }
            return {
                selected: selectedSources,
                info: allSources
            };
        case SELECT_SOURCES:
            let sourcesToSelect = action.payload;
            if (sourcesToSelect === undefined) {
                sourcesToSelect = sources.info.map(source => source.id)
            }
            return {
                info: sources.info,
                selected: removeDuplicates(sources.selected.concat(sourcesToSelect))
            }
        case DESELECT_SOURCES:
            let sourcesToDeselect = action.payload;
            if (sourcesToDeselect === undefined) {
                sourcesToDeselect = sources.selected;
            }
            return {
                info: sources.info,
                selected: sources
                    .selected
                    .filter(sourceId => {
                        return !sourcesToDeselect.includes(sourceId);
                    })
            }
        default:
            return sources;
    }
}

const initialStories = [];

const storiesReducer = (stories = initialStories, action) => {
    switch (action.type) {
        case RESET_DATA:
            return initialStories;
        case RECEIVE_STORIES:
            return action.payload;
        default:
            return stories;
    }
}

const reducer = combineReducers({stories: storiesReducer, sources: sourcesReducer})

export default reducer;
