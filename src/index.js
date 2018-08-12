import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Admin from './admin'

import Home from './pages/router-demo/router1/Home'

// import Route from './pages/router-demo/router2/router'

import Route from './pages/router-demo/router3/router'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
