import './index.css';

import {BrowserRouter, HashRouter, MemoryRouter} from 'react-router-dom';

import NewsSite from './components/NewsSite';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <HashRouter>
        <NewsSite/>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
