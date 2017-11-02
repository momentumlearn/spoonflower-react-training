import update from 'immutability-helper';
import {SET_SOURCES, SET_STORIES, TOGGLE_SOURCE} from './actions';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_SOURCES:
            return update(state, {
                sources: {
                    $set: action.payload
                }
            })
        case SET_STORIES:
            return update(state, {
                stories: {
                    $set: action.payload
                }
            })
        case TOGGLE_SOURCE:
            return update(state, {
                sources: {
                    $apply: (sources) => {
                        const idx = sources.findIndex(source => source.id === action.payload.id)
                        if (idx === -1) {
                            return sources;
                        }
                        return update(sources, {
                            [idx]: {
                                active: {
                                    $set: action.payload.active
                                }
                            }
                        })
                    }
                }
            })
        default:
            return state;
    }
}

export default reducer;
