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
        res.status(500).json(err)
    }

})

//login
router.post('/login', async (req,res) =>{
    try{
        //validate user email
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")
        //validate user password
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("wrong password")

        //if all validation checks is complete
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router