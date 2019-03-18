const express = require('express');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry');
const fs = require('fs');
const path = require('path');
const defaultServerEntry = serverEntry.default || {};

const app = express();

const template = fs.readFileSync(path.join(__dirname, '../client/template.html'), 'utf8');

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('*', function(req, res) {
  const appString = ReactSSR.renderToString(defaultServerEntry);
  const resultString = template.replace('<app></app>', appString)
  res.send(resultString);
});

app.listen(3333, function() {
  console.log('Application is listening on port 3333')
});