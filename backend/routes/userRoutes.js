const router = require('express').Router()
const {updateUser,
    deleteUser,
    getSingleUser,
    followUser,
    unFollowUser} = require('../controllers/userController')

//update user
router.put("/:id",updateUser)

//delete user
router.delete("/:id",deleteUser)

//get a single user
router.get("/:id",getSingleUser)

//follow a user
router.put("/:id/follow",followUser)

//unfollow a user
router.put("/:id/unfollow",unFollowUser)

module.exports = router