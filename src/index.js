import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
console.log(store.getState());
console.log('=======================================');
ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
