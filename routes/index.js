const { Router } = require('express')
const router = Router()
const movies = require('./movie.route')
const users = require('./users.route')

//route
router.use('/api', movies);
router.use('/api', users);

module.exports = router;