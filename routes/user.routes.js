const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/user.controller');


router.post('/signup', async(req, res) => {
    const {username, password} = req.body
    const encrypted = await bcrypt.hash(password, 10)
    let response =  await userController.registerUser({username, password:encrypted })
    if(response.error) return res.status(400).json(response.error)
    return res.status(201).json(response)
    
   
   
})

router.post('/login', async(req, res) => {
    // process login from here
    const {username, password} = req.body
    let response =  await userController.loginUser({username, password })
    if(response.error) {
        return res.status(400).json({error: response.error})
    }
    else {
      return res.status(200).json(response)
    }
})
module.exports = router;