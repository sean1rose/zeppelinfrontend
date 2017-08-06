import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const title = 'zeppelinfrontend';

const apiUrl = process.env.API_URL;

axios.get(apiUrl + '/lists')
  .then((res) => {
    console.log('GET REQUEST RESPONSE -> ', res);
  });

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

console.log('CAN U SEE THIS foo?');