const configuration = require('../../db/knex');
const path = require('path');
const knex = require('knex');
const dbClient = knex(configuration);

const add_movie = function addMovie(movie, result){
    dbClient("tbl_movies")
    .insert(movie)
    .then(()=>{
        result(null, true);
    })
    .catch(err => console.log("Error", err));
}

const select_all_movies = function getAllMovies(result){
    dbClient("tbl_movies")
    .select()
    .then(function(data){
        result(null, data);
    })
    .catch(err => console.log("Error", err));
}

const select_movie_by_ID = function selectMovieByID(movieID, result){
    dbClient("tbl_movies")
    .select()
    .where({movie_id:movieID})
    .then(function(data){
        result(null, data)
    })
    .catch(err => console.log(err));
}

const update_movie = function updateMovie(movieID, movie, result){
    dbClient("tbl_movies")
    .where({movie_id:movieID})
    .update({
        movieName: movie.movieName,
        movieDesc: movie.movieDesc,
        imageName: movie.imageName,
        releaseDate: movie.releaseDate,
        trailer:movie.trailer
    })
    .then(function(data){
        result(null, data);
    })
    .catch(err => console.log(err));
}

module.exports={
    add_movie, 
    select_all_movies, 
    select_movie_by_ID,
    update_movie
}