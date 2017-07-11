import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
//setInterval(()=>ReactDOM.render(<App />, document.getElementById('root')), 1000);

registerServiceWorker();
