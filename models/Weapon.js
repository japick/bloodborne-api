const mongoose = require('mongoose')

const Weapon = mongoose.Schema({
  title: String,
  description: String
})

module.exports = Weapon