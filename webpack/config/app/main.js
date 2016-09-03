
// es6 react
import { React, ReactDOM } from 'react'; 
import Hello from './hello.jsx';

ReactDOM.render(<Hello></Hello>, document.getElementById('app'));


var Math = require('./Math');

var style = require('./test.css');

var oDiv = document.createElement('div');
oDiv.id = 'box';

document.body.appendChild(oDiv);


var n = Math.sum(1, 2);

console.log(n);
