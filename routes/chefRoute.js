const express = require('express')
const {createChef, getAllChefs, getOneById, updateChef, deleteChef} = require('../controllers/ChefController');
const router = express.Router()

router.get("/", (req,res)=>{
    res.send({message: "Chef Page"})
})
router.post('/create', createChef);
router.get('/getAll', getAllChefs);
router.get('/:id', getOneById);
router.put('/:id', updateChef);
router.delete('/:id', deleteChef);


module.exports = router;