const router = require('express').Router()

const roRoutes = require('./repairOrder-routes');
const userRoutes = require('./user-routes')

router.use('/repairs', roRoutes)
router.use('/users', userRoutes)

module.exports = router