const express = require('express')
const router = express.Router()
const Weapon = require('../models/Weapon')

// RETURNS ALL WEAPONS
router.get('/', async (req, res) => {
  // return data
  try {
    const weapons = await Weapon.find()
    res.json(weapons)
  } catch(error) {
    res.json({ message: error })
  }
})

// SUBMIT WEAPON
router.post('/', async (req, res) => {
  const weapon = new Weapon({
    name: req.body.name,
    description: req.body.description
  })

  try {
    const savedWeapon = await weapon.save()
    res.json(savedWeapon)
  } catch(error) {
    res.json({ message: error })
  }

})

module.exports = router

