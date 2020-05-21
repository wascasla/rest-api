const { Router } = require('express')
const router = Router()

const movies = require('../sample.json')

//route
router.get('/movies', (req, res) => {
    res.json(movies)
});

router.post('/movies', (req, res) => {
    const movie = req.body;
    console.log(movie);
    res.json(movie);
    
})

module.exports = router;