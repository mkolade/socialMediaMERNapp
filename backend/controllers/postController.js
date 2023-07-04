const Post = require('../models/postModel');
const User = require('../models/userModel');

//create a post
const createPost = async (req,res) =>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
       return res.status(500).json(err)
    }
}
//update a post
const updatePost = async (req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json('Post updated successfully')
        }else{
            res.status(403).json('You can only update your own posts')
        }
    }catch(err){
        return res.status(400).json(err)
    }
    
}
//delete a post
const deletePost = async (req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('Post deleted successfully')
        }else{
            res.status(403).json('You can only delete your own posts')
        }
    }catch(err){
        return res.status(400).json(err)
    }
    
}
//like / dislike a post
const likeDisLikePost = async (req,res)=>{
    try{
        const post =await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json('The post has been liked')
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json('The post has been unliked')
        }
    }catch(err){
        return res.status(500).json(err)
    }
    
}
//get a post 
const getPost = async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
}
//get timeline posts
const timelinePost = async (req,res) =>{
    try{
        const currentUser = await User.findById(req.params.userId)
        if (!currentUser) {
            return res.status(404).json('User not found');
        }
        const userPosts =await Post.find({userId: currentUser._id})
        //map through all followers post to display them.Promise.all is used cause we are to use it anytime we are looping
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) =>{
               return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

//get all user posts for profile
const getAllUserPosts = async (req,res) =>{
    try{
        const currentUser = await User.findById(req.params.userId)
        if (!currentUser) {
            return res.status(404).json('User not found');
        }
        const userPosts =await Post.find({userId: currentUser._id})
        //map through all followers post to display them.Promise.all is used cause we are to use it anytime we are looping
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) =>{
               return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    createPost,updatePost,deletePost,likeDisLikePost,getPost,timelinePost,getAllUserPosts
}