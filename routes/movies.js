const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies)=>{
        res.render('movies', {movies});
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id', (req,res) => {
    const id = req.params.id

    Movie.findById(id)
    .then((movie)=>{
        res.render('info', movie);
    })
    .catch(()=> console.log('Movie not found'))
})

module.exports = router;
