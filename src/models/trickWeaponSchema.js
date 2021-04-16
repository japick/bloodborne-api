const mongoose = require('mongoose')

const trickWeaponSchema = mongoose.Schema({
  name: String,
  description: String,
  physical_atk: {
    type: Number,
    default: null,
    required: false
  },
  blood_atk: {
    type: Number,
    default: null,
    required: false
  },
  arcane_atk: {
    type: Number,
    default: null,
    required: false
  },
  fire_atk: {
    type: Number,
    default: null,
    required: false
  },
  bolt_atk: {
    type: Number,
    default: null,
    required: false
  },
  slow_poison: {
    type: Number,
    default: null,
    required: false
  },
  rapid_poison: {
    type: Number,
    default: null,
    required: false
  },
  vs_kin: {
    type: Number,
    default: null,
    required: false
  },
  vs_beasts: {
    type: Number,
    default: null,
    required: false
  },
  strength: {
    base: Number,
    bonus: String
  }
})

const trickWeapon = mongoose.model('trickWeapon', trickWeaponSchema)

module.exports = trickWeapon