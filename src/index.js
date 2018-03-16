import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Chart from 'chart.js';
import Dashboard from './Dashboard';
import{ firebaseApp } from './components/firebase'

ReactDOM.render(
<BrowserRouter>
<switch>
<Route path='/' exact render={() => <App />} />
<Route path='/dashboard' exact render={() => <Dashboard />} />
</switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
