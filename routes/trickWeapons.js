const express = require('express')
const router = express.Router()
const trickWeapon = require('../models/trickWeaponSchema')

// RETURNS ALL WEAPONS
router.get('/', async (req, res) => {
  // return data
  try {
    const weapons = await trickWeapon.find({}, '-_id -__v') // exclude fields
    res.json(weapons)
  } catch(error) {
    res.json({ message: error })
  }
})

// SUBMIT WEAPON
router.post('/', async (req, res) => {
  const weapon = new trickWeapon({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    physical_atk: req.body.physical_atk,
    blood_atk: req.body.blood_atk,
    arcane_atk: req.body.arcane_atk,
    fire_atk: req.body.fire_atk,
    bolt_atk: req.body.bolt_atk,
    slow_poison: req.body.slow_poison,
    rapid_poison: req.body.rapid_poison,
    vs_kin: req.body.vs_kin,
    vs_beasts: req.body.vs_beasts,
    strength: {
      base: req.body.strength.base,
      bonus: req.body.strength.bonus
    },
    skill: {
      base: req.body.skill.base,
      bonus: req.body.skill.bonus
    },
    bloodtinge: {
      base: req.body.bloodtinge.base,
    	bonus: req.body.bloodtinge.bonus
    },
    arcane: {
    	base: req.body.arcane.base,
    	bonus: req.body.arcane.bonus
    },
    durability: req.body.durability,
    qs_bullet_use: req.body.qs_bullet_use,
    rally: req.body.rally,
    bg_slots: {
    	normal: req.body.bg_slots.normal,
    	uncanny: req.body.bg_slots.uncanny,
    	lost: req.body.bg_slots.lost
    },
    location: req.body.location,
    buy_price: req.body.buy_price,
    sell_price: req.body.sell_price
  })
  try {
    const savedWeapon = await weapon.save()
    res.json(savedWeapon)
  } catch(error) {
    res.json({ message: error })
  }

})

module.exports = router

