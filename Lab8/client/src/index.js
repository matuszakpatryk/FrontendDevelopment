import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FlowerListView from './components/FlowerListView';

ReactDOM.render(<FlowerListView />, document.getElementById('root'));
serviceWorker.unregister();
