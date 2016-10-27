const express = require('express');
const path = require('path');

const rootDir = path.resolve(__dirname, '.');
let app = express();

app.get('*', (req, res, next) => {
  res.send(path.resolve(rootDir, 'public', 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log(`App is runnning on port ${3000}!`);
});
