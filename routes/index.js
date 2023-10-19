const express = require('express')
const router = express.Router()

const superAdminRouter = require('../routes/superadminRoute')
const adminRouter = require('../routes/adminRoute')
const chefRouter = require('../routes/chefRoute')
const technicienRouter = require('../routes/technicienRoute')
const succursaleRouter = require('../routes/succursaleRoute')
const clientRouter = require('../routes/clientRoute')
const homeRouter = require('../routes/homeRoute')
const serviceRouter = require('../routes/serviceRoute')


router.use('/', homeRouter)
router.use('/superadmin', superAdminRouter)
router.use('/admin', adminRouter)
router.use('/chef', chefRouter)
router.use('/technicien', technicienRouter)
router.use('/succursale', succursaleRouter)
router.use('/client', clientRouter)
router.use('/service', serviceRouter)


module.exports = router