const router = require('express').Router()
const {
    createPost,updatePost,deletePost,likeDisLikePost,getPost,timelinePost
} = require('../controllers/postController')
const Post = require('../models/postModel');
const User = require('../models/userModel');

//create a post
router.post('/',createPost )

//update a post
router.put('/:id', updatePost)

//delete a post
router.delete('/:id', deletePost)

//like / dislike a post
router.put('/:id/like', likeDisLikePost)

//get a post
router.get('/:id', getPost)

//get timeline posts
router.get('/timeline/all',timelinePost )

module.exports = router