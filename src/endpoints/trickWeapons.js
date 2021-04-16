const express = require('express')
const router = express.Router()
const trickWeapon = require('../models/trickWeaponSchema')

// RETURNS ALL WEAPONS
router.get('/', async (req, res) => {
  // return data
  try {
    const weapons = await trickWeapon.find()
    res.json(weapons)
  } catch(error) {
    res.json({ message: error })
  }
})

// SUBMIT WEAPON
router.post('/', async (req, res) => {
  const weapon = new trickWeapon({
    name: req.body.name,
    // needs all definitions here...
    strength: {
      base: req.body.strength.base,
      bonus: req.body.strength.bonus
    }
  })
  try {
    const savedWeapon = await weapon.save()
    res.json(savedWeapon)
  } catch(error) {
    res.json({ message: error })
  }

})

module.exports = router

