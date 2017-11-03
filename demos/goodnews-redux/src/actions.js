import Cookies from 'universal-cookie';
import NewsAPI from './NewsAPI';

const cookies = new Cookies();

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const SELECT_SOURCES = 'SELECT_SOURCES';
export const DESELECT_SOURCES = 'DESELECT_SOURCES';
export const RESET_DATA = 'RESET_DATA';

const newsApi = new NewsAPI();

const makeActionCreator = (type) => {
    return (payload) => {
        return {type, payload}
    }
}

export const receiveSources = makeActionCreator(RECEIVE_SOURCES);
export const receiveStories = makeActionCreator(RECEIVE_STORIES);
export const resetData = makeActionCreator(RESET_DATA);

export const selectSources = (sources) => {
    return (dispatch, getState) => {
        dispatch({type: SELECT_SOURCES, payload: sources})
        cookies.set('selectedSources', getState().sources.selected);
    }
}

export const deselectSources = (sources) => {
    return (dispatch, getState) => {
        dispatch({type: DESELECT_SOURCES, payload: sources})
        cookies.set('selectedSources', getState().sources.selected);
    }
}

export const retrieveSelectedSources = () => {
    return (dispatch) => {
        let selected = cookies.get('selectedSources');
        if (selected) {
            dispatch(deselectSources());
            dispatch(selectSources(selected));
        }
    }
}

export const retrieveSources = () => {
    return (dispatch) => {
        newsApi.getSources().then(res => {
            dispatch(receiveSources(res.body.sources))
        })
    }
}

export const retrieveStories = () => {
    return (dispatch) => {
        newsApi.getStories().then(res => {
            dispatch(receiveStories(res.body.articles))
        })
    }
}
