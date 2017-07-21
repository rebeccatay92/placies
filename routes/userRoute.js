const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users_controller')

router.get('/new', usersController.register)

router.post('/', usersController.create)

// implementation / calling the fn
// router.post('/', placesController.create)

module.exports = router
