import './index.css';

import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from "./reducer";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type: 'ADD_TODO', payload: "Get some milk"})
store.dispatch({type: 'ADD_TODO', payload: "Rotate your tires"})

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
