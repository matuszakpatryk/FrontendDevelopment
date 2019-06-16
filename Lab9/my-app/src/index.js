import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Parent } from './component/Parent'

ReactDOM.render(<Parent />, document.getElementById('root'));
serviceWorker.unregister();
