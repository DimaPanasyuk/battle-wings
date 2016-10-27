const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const rootDir = path.resolve(__dirname, '.');
let app = express();

app.use(express.static(path.resolve(rootDir, 'public', 'build')));
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(rootDir, 'public', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is runnning on port ${port}!`);
});
