import request from 'superagent';

export const SET_SOURCES = 'SET_SOURCES';
export const SET_STORIES = 'SET_STORIES';
export const TOGGLE_SOURCE = 'TOGGLE_SOURCE';

const API_KEY = '48ee6a49fa6140bea9eb8ad74e973862';

const makeActionCreator = (type) => {
    return (payload) => {
        return {type, payload}
    }
}

const setSources = makeActionCreator(SET_SOURCES);
const setStories = makeActionCreator(SET_STORIES);
export const toggleSource = makeActionCreator(TOGGLE_SOURCE);

export const fetchSources = () => {
    return dispatch => {
        request
            .get("http://beta.newsapi.org/v2/sources?language=en&country=us")
            .set('X-API-Key', API_KEY)
            .then(res => {
                const sources = res.body.sources;
                sources.forEach(source => source.active = true)
                dispatch(setSources(sources));
            })
    }
}

export const fetchStories = () => {
    return dispatch => {
        request
            .get("http://beta.newsapi.org/v2/top-headlines?language=en&country=us")
            .set('X-API-Key', API_KEY)
            .then(res => {
                dispatch(setStories(res.body.articles))
            })
    }
}
