const express = require('express')
const {createService, getAllServices, updateService, deleteService} = require('../controllers/ServiceController');
const router = express.Router()


router.get("/", (req,res)=>{
    res.send({message: "service Page"})
})
router.post('/create', createService);
router.get('/getAll', getAllServices);
// router.get('/:id', getOneById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);


module.exports = router;