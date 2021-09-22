import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('in container!');
console.log('domain---', process.env.MARKETING_APP_DOMAIN);

ReactDOM.render(<App />, document.querySelector('#root'));