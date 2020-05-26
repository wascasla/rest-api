const { Router } = require('express');
const router = Router();
const _ = require('lodash');

const movies = require('../sample.json');

//route
router.get('/movies', (req, res) => {
  res.json(movies);
});

router.post('/movies', (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = { ...req.body };
    movies.push(newMovie);
    res.json({ added: 'ok' });
  } else {
    res.status(400).json({ statuscode: 'bad request' });
  }
});

router.delete('/movies/:id', (req, res) => {
  const id = req.params.id;

  _.remove(movies, (movie) => {
    // el remove permite iterar un array
    return movie.id == id;
  });
  res.json(movies);
});

router.put('/movies/:id', (req, res) => {
  const id = req.params.id;
  const { title, director, year, rating } = req.body;
  _.each(movies, (movie) => {
    if (movie.id == id) {
      movie.title = title;
      movie.director = director;
      movie.year = year;
      movie.rating = rating;
    }
  });
  res.json({ modified: 'ok' });
});

module.exports = router;
