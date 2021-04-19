const express = require('express')
const router = express.Router()
const TrickWeapon = require('../models/trickWeapon')
const Consumable = require('../models/consumables')

// GET...
// get a list of all trick weapons
router.get('/trick-weapons', (req, res, next) => {
  TrickWeapon.find({}, '-_id -__v')
    .then((weapons) => {
      res.send(weapons)
    })
    .catch(next)
})

// get a list of all consumable items
router.get('/consumables', (req, res, next) => {
  Consumable.find({}, '-_id -__v')
    .then((consumables) => {
      res.send(consumables)
    })
    .catch(next)
})

// POST...
// add trick weapon
router.post('/trick-weapons', (req, res, next) => {
  TrickWeapon.create(req.body)
    .then((weapon) => {
      res.send(weapon)
    })
    .catch(next)
})

// add consumable
router.post('/consumables', (req, res, next) => {
  Consumable.create(req.body)
    .then((consumable) => {
      res.send(consumable)
    })
    .catch(next)
})

module.exports = router