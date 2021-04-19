const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrickWeaponSchema = new Schema({
  name: String,
  description: String,
  image: String,
  physical_atk: {
    type: Number,
    default: null
  },
  blood_atk: {
    type: Number,
    default: null
  },
  arcane_atk: {
    type: Number,
    default: null
  },
  fire_atk: {
    type: Number,
    default: null
  },
  bolt_atk: {
    type: Number,
    default: null
  },
  slow_poison: {
    type: Number,
    default: null
  },
  rapid_poison: {
    type: Number,
    default: null
  },
  vs_kin: {
    type: Number,
    default: null
  },
  vs_beasts: {
    type: Number,
    default: null
  },
  strength: {
    base: {
      type: Number, 
      default: null
    },
    bonus: { 
      type: Array,
      default: null
    }
  },
  skill: {
    base: {
      type: Number, 
      default: null
    },
    bonus: { 
      type: Array,
      default: null
    }
  },
  bloodtinge: {
    base: {
      type: Number, 
      default: null
    },
    bonus: { 
      type: Array,
      default: null
    }
  },
  arcane: {
    base: {
      type: Number, 
      default: null
    },
    bonus: { 
      type: Array,
      default: null
    }
  },
  durability: {
    type: Number,
    default: null
  },
  qs_bullet_use: {
    type: Number,
    default: null
  },
  rally: {
    type: Number,
    default: null
  },
  bg_slots: {
    type: Object,
    normal: {
      type: Array,
      default: null
    },
    normal: {
      type: Array,
      default: null
    },
    normal: {
      type: Array,
      default: null
    }
  },
  location: String,
  buy_price: {
    type: Number,
    default: null
  },
  sell_price: {
    type: Number,
    default: null
  }
})

const TrickWeapon = mongoose.model('trickWeapon', TrickWeaponSchema)

module.exports = TrickWeapon