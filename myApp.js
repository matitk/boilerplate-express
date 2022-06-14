let express = require('express');
let app = express();

console.log('Hello World')

app.use(__dirname + '/public', express.static())

app.get('/', (req, res) => {
  const index = __dirname + '/views/index.html'
  res.sendFile(index)
})































module.exports = app;
