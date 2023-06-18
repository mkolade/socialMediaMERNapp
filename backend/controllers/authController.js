const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const register = async (req,res) => {
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
        //check if user exists
        const checkUser = await User.findOne({email:req.body.email})
        if(checkUser){
            return res.status(405).json('email already exists')
        }
        //save user to db and send response
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }

}

const login = async (req,res) =>{
    try{
        //validate user email
        const user = await User.findOne({email:req.body.email})
         if(!user){
          return  res.status(404).json("user not found")
         }
        
        //validate user password
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        if( !validPassword){
            return res.status(400).json("wrong password")
        }

        //if all validation checks is complete
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports ={register,login}