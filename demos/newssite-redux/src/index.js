import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import NewsSite from './containers/NewsSiteContainer';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

let store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter><NewsSite/></BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
