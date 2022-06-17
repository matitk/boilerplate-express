let express = require('express')
let app = express()
let logger = require('./services/logger')
require('dotenv').config()

console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'))

app.use(logger)

app.get('/', (req, res) => {
  const index = __dirname + '/views/index.html'
  res.sendFile(index)
})

app.get('/json', (req, res) => {
  const msgStyle = process.env.MESSAGE_STYLE
  const msg = 'Hello json'
  if (msgStyle === 'uppercase') {
    res.json({message: msg.toUpperCase()})
  } else {
    res.json({message: msg})
  }
})






























module.exports = app;
