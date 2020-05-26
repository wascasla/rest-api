const { Router } = require('express');
const router = Router();
const movies = require('./movie.route');
const users = require('./users.route');

//route
router.use('/api', movies);
router.use('/api', users);

//route
/* router.get('/', (req, res) => {
  //res.send('Hello world2')
  res.json({ title: 'hola desde vs' });
}); */

module.exports = router;
