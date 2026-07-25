const express = require('express')
//const signupController = require('../controllers/signupController')
const router = express.Router();
const { signup, login } = require('../controllers/authController.js');



router.post ('/signup', signup)

router.post('/login', login);




module.exports = router