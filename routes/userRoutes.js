const express = require('express')
//const signupController = require('../controllers/signupController')

const router = express.Router()

router.get('/profile', (req,res)=>{
    res.send("Profile")
})

router.post('/signup', (req,res)=>{
    res.send("signup")
})

module.exports = router