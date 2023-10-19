const express = require('express')
const router = express.Router()

router.get("/", (req,res)=>{
    res.send({message: "Super Admin Page"})
})

module.exports = router;