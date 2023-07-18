const router = require('express').Router()
const {updateUser,
    deleteUser,
    getSingleUser,
    followUser,
    unFollowUser,
    getAllFollowings
} = require('../controllers/userController')

//update user
router.put("/:id",updateUser)

//delete user
router.delete("/:id",deleteUser)

//get a single user
router.get("/",getSingleUser)

//get all user followings
router.get("/followings/:userId",getAllFollowings)

//follow a user
router.put("/:id/follow",followUser)

//unfollow a user
router.put("/:id/unfollow",unFollowUser)

module.exports = router