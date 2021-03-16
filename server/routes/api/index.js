const router = require('express').Router()

const roRoutes = require('./repairOrder-routes');

router.use('/repairs', roRoutes)

module.exports = router