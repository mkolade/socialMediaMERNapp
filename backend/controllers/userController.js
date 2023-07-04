const User = require('../models/userModel')
const bcrypt = require('bcrypt')

//update user
const updateUser = async (req,res) =>{
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
}

//delete user
const deleteUser = async (req,res) =>{
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
}

//get a single user
const getSingleUser = async (req,res) =>{
    const userId = req.query.userId;
    const username = req.query.username
    try{
        const user = userId 
        ? await User.findById(userId)
        : await User.findOne({username: username})
        if(!user){
          return  res.status(404).json("user not found")
        }
        const {password,updatedAt,createdAt,...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
}

//follow a user
const followUser = async (req,res) =>{
    if(req.body.userId !== req.params.id){
        try{
            const currentUser = await User.findById(req.body.userId)
            const userToFollow = await User.findById(req.params.id)

            if(!userToFollow.followers.includes(req.body.userId)){
                await userToFollow.updateOne({$push: {followers:req.body.userId}})
                await currentUser.updateOne({$push: {following:req.params.id}})

                res.status(200).json("User has been successfully followed")
            }else{
                res.status(403).json("You already follow this user")
            }

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(404).json("You cant follow yourself")
    }
}

//unfollow a user
const unFollowUser = async (req,res) =>{
    if(req.body.userId !== req.params.id){
        try{
            const currentUser = await User.findById(req.body.userId)
            const userToUnFollow = await User.findById(req.params.id)

            if(userToUnFollow.followers.includes(req.body.userId)){
                await userToUnFollow.updateOne({$pull: {followers:req.body.userId}})
                await currentUser.updateOne({$pull: {following:req.params.id}})

                res.status(200).json("User has been successfully unfollowed")
            }else{
                res.status(403).json("You dont follow this user")
            }

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(404).json("You cant unfollow yourself")
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getSingleUser,
    followUser,
    unFollowUser
}