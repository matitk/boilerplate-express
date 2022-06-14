let express = require('express');
let app = express();

console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  const index = __dirname + '/views/index.html'
  res.sendFile(index)
})































module.exports = app;
