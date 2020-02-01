import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts';

axios.interceptors.request.use((reqConfig) => {
    console.log(reqConfig);
    return reqConfig;
}, (errConfig) => {
    console.log(errConfig);
    return Promise.reject(errConfig);
});

axios.interceptors.response.use(respData => {
    return respData;
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
