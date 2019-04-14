import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Message() {
    return <h2>Hello World!</h2>;
}

ReactDOM.render(<Message />, document.getElementById('root'))