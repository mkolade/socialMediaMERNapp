const router = require('express').Router()
const Post = require('../models/postModel')

router.get('/',(req,res) =>{
    console.log('Post page')
})

module.exports = router