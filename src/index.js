import React from 'react';
import ReactDOM from 'react-dom';

const title = 'zeppelinfrontend';

const apiUrl = process.env.API_URL;
console.log('here - ', apiUrl);

// axios({
//   method: 'get',
//   url: 'http://local'
// })

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

console.log('CAN U SEE THIS foo?');