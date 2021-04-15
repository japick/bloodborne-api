const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// MIDDLEWARE
app.use(bodyParser.json())

// ENDPOINTS
const weaponsEndpoint = require('./endpoints/weapons')

app.use('/weapons', weaponsEndpoint)

// INDEX
app.get('/', (req, res) => {
  res.send('Bloodborne API')
})

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