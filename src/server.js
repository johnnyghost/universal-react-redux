import React from 'react';
import Root from 'components/Root';
import { renderToString } from 'react-dom/server';

const createScriptTags = () => {
  return '<script src="/server.js"></script>';
};

const buildPage = (componentHTML) => {
  return `<!doctype html> <html> <head></head><body><div id="app">${componentHTML}</div>${createScriptTags()}</body></html>`;
};

export default function render(req, res) {

  const component = renderToString(<Root />);
  const html = buildPage(component)

  res.send(html);
}
