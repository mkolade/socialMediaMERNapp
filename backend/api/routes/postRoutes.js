const router = require('express').Router()
const {
    createPost,updatePost,deletePost,likeDisLikePost,getPost,timelinePost,getAllUserPosts
} = require('../controllers/postController')

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
router.get('/timeline/all/:userId',timelinePost )

//get all user posts for profile
router.get('/profile/:username',getAllUserPosts )

module.exports = router