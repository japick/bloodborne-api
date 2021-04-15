const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

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