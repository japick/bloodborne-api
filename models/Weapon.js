const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: String,
  description: String
})

module.exports = mongoose.model('Weapon', schema)