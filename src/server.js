import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './components/Root';

const app = express();

app.get('/', (request, response) => {
  const html = ReactDOMServer.renderToString(<Root />);
  response.send(html);
})

app.listen(3000, () => {
  console.log('-> run ');
})
