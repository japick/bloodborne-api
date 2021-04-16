const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// MIDDLEWARE
app.use(bodyParser.json())

// ENDPOINTS
const trickWeaponsEndpoint = require('./endpoints/trickWeapons')
// const firearmsEndpoint = require('./endpoints/firearms')

app.use('/trick-weapons', trickWeaponsEndpoint)
// app.use('/firearms', firearmsEndpoint)

// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  () => {
    console.log('connected to db!')
})

app.listen(3000)