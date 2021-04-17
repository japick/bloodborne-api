const express = require('express')
const router = express.Router()
const TrickWeapon = require('../models/trickWeapon')

// get list of all trick weapons
router.get('/trick-weapons', (req, res, next) => {
  TrickWeapon.find({}, '-_id -__v') // exclude fields
    .then((weapons) => {
      res.send(weapons)
    })
    .catch(next)
})

// submit trick weapon
router.post('/trick-weapons', (req, res, next) => {
  TrickWeapon.create(req.body)
    .then((weapon) => {
      res.send(weapon)
    })
    .catch(next)
})

module.exports = router