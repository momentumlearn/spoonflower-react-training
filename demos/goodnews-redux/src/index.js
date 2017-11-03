import './index.css';

import {applyMiddleware, createStore} from 'redux';
import { retrieveSelectedSources, retrieveSources, retrieveStories } from './actions';

import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(retrieveSelectedSources());
store.dispatch(retrieveSources());
store.dispatch(retrieveStories());

ReactDOM.render((
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
