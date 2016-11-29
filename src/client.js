import React from 'react';
import ReactDOM from 'react-dom';
import { auth } from 'config';

ReactDOM.render(
  <h1>{auth.AUTH_TOKEN_KEY}</h1>,
  document.getElementById('root')
);
