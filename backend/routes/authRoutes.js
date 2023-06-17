const router = require('express').Router()
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

//register
router.post('/register', async (req,res) => {
    //encypt password with bcrypt hash
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(req.body.password,salt)

    try{
        //create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:encryptedPassword
        })

        //save user to db and send response
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }

})

module.exports = router