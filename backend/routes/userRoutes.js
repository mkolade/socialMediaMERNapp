const router = require('express').Router()

router.get('/',(req,res) =>{
    res.status(200).send('Hey its your users')
})

module.exports = router