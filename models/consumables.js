const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConsumablesSchema = new Schema({
  name: String,
  image: String,
  use: String,
  acquired: String
})

const Consumable = mongoose.model('consumable', ConsumablesSchema)

module.exports = Consumable