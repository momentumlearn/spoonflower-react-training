import './index.css';

import {applyMiddleware, createStore} from 'redux';

import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { addTodo } from './actions';
import {loadTodos} from './persistence';
import logger from 'redux-logger';
import reducer from "./reducer";
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(addTodo("Get some milk"))
store.dispatch(addTodo("Wash the clothes"))

// loadTodos(store.dispatch);

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
