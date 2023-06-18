const router = require('express').Router()
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

//update user
router.put("/:id",async (req,res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)
            }catch(err){
                res.status(500).json(err)
            }
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
            res.status(200).json('account successfully updated')
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        return res.status(403).json("You can only update your account")
    }
})

//delete user
router.delete("/:id",async (req,res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json('account successfully deleted')
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        return res.status(403).json("You can only delete your account")
    }
})

//get a single user
router.get("/:id",async (req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json("user not found")
        }
        const {password,updatedAt,createdAt,...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})
//follow a user
router.put("/:id/follow",async (req,res) =>{
    if(req.body.userId !== req.params.id){
        try{
            const currentUser = await User.findById(req.body.userId)
            const userToFollow = await User.findById(req.params.id)

            if(!userToFollow.followers.includes(req.body.userId)){
                await userToFollow.updateOne({$push: {followers:req.body.userId}})
                await currentUser.updateOne({$push: {following:req.params.id}})

                res.status(200).json("User has been successfully followed")
            }else{
                res.status(403).json("You alrady follow this user")
            }

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(404).json("You cant follow yourself")
    }
})
//unfollow a user

module.exports = router