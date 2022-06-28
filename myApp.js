let express = require('express')
let app = express()
let logger = require('./services/logger')
require('dotenv').config()
let bodyParser = require('body-parser')

console.log('Hello World')

// Middlewares
app.use('/public', express.static(__dirname + '/public'))
app.use(logger)
app.use(bodyParser.urlencoded({extended: false}))

// Routes
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

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({time: req.time})
})

app.get('/:word/echo', (req, res) => {
  const word = req.params.word
  res.json({echo: word})
})

app.get('/name', (req, res) => {
  const fullName = `${req.query.first} ${req.query.last}`
  res.json({name: fullName})
})

app.post('/name', (req, res) => {
  const fullName = `${req.body.first} ${req.body.last}`
  res.json({name: fullName})
})

























module.exports = app;
