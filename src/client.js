import React from 'react';
import ReactDOM from 'react-dom';
import config from 'config';

ReactDOM.render(
  <h1>{config.AUTH_TOKEN_KEY}</h1>,
  document.getElementById('root')
);
