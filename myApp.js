let express = require('express')
let app = express()
require('dotenv').config()

console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  const index = __dirname + '/views/index.html'
  res.sendFile(index)
})

app.get('/json', (req, res) => {
  const msgStyle = process.env.MESSAGE_STYLE
  if (msgStyle === 'uppercase') {
    res.json({ message: 'Hello json'.toUpperCase() })
  } else {
    res.json({ message: 'Hello json' })
  }
})






























module.exports = app;
