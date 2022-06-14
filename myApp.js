let express = require('express');
let app = express();

console.log('Hello World')

app.get('/', (req, res) => {
  const index = __dirname + '/views/index.html'
  res.sendFile(index)
})































module.exports = app;
