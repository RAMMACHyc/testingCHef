const express = require('express')
const router = express.Router()

const {register} = require('../controllers/Technician')




router.get("/", (req,res)=>{
    res.send({message: "Technicien Page"})
})


router.post('/register', register);


module.exports = router;