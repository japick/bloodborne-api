const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv/config')

// set up express app
const app = express()

// connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// override deprecated mongoose promise
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// initialise routes
app.use('/api', require('./routes/api'))

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({Error: err.message})
})

// listen for requests
app.listen(process.env.port || 9000, () => {
  console.log('listening for requests...')
})