import './index.css';

import {BrowserRouter} from 'react-router-dom';
import NewsSite from './components/NewsSite';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <NewsSite/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
