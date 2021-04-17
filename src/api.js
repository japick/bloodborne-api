const express = require('express')
const serverless = require('serverless-http')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const trickWeaponsEndpoint = require('./routes/trickWeapons')

require('dotenv/config')

app.use(bodyParser.json())

app.use('/.netlify/functions/api/trick-weapons', trickWeaponsEndpoint)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports.handler = serverless(app)