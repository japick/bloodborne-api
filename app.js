const express = require('express')

const app = express()

// ROUTES
app.get('/weapons', (req, res) => {
  res.send('Weapons endpoint')
})

app.get('/runes', (req, res) => {
  res.send('Runes endpoint')
})

app.listen(3000)