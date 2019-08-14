const express = require('express')
const router = express.Router()

const models = require('../models/index')

router.get('/users', async (req, res) =>{
    let users = await models.User.findAll()

    users = users.map(user =>{
        return{
            userId: user.user_id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            age: user.age
        }
    })

    return res.json({users})
})

