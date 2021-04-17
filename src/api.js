const express = require('express')
const serverless = require('serverless-http')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// MIDDLEWARE
app.use(bodyParser.json())

// ENDPOINTS
const trickWeaponsEndpoint = require('./routes/trickWeapons')
// const firearmsEndpoint = require('./routes/firearms')

app.use('/.netlify/functions/api/trick-weapons', trickWeaponsEndpoint)
// app.use('/.netlify/functions/api/firearms', firearmsEndpoint)

// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  () => {
    console.log('connected to db!')
})

module.exports.handler = serverless(app)