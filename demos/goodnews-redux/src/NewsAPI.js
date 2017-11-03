import request from 'superagent';

const apiKey = '48ee6a49fa6140bea9eb8ad74e973862';
const sourcesUrl = "http://beta.newsapi.org/v2/sources?language=en&country=us"
const storiesUrl = "http://beta.newsapi.org/v2/top-headlines?language=en&country=us"

class NewsAPI {
    getStories(callback) {
        return request.get(storiesUrl).set('X-API-Key', apiKey)
    }

    getSources(callback) {
        return request.get(sourcesUrl).set('X-API-Key', apiKey)
    }
}

export default NewsAPI;
