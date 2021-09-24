import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('in container updated container!');

ReactDOM.render(<App />, document.querySelector('#root'));