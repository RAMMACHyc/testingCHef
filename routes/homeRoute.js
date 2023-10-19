const express = require('express')
const router = express.Router()

router.get("/", (req,res)=>{
    res.send({message: "home Page"})
})

module.exports = router;