const express = require('express')
const router = express.Router()

const { addNewAdmin } = require('../controllers/AdminController')


router.get("/", (req,res)=>{
    res.send({message: "Admin Page"})
})

router.post("/addAdmin" , addNewAdmin)

module.exports = router;