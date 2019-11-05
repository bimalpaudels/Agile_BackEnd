const configuration = require("../../db/knex");
const path = require("path");
const knex = require("knex");
const dbClient = knex(configuration);

const create_screen = function createScreen(screenDetails, result){
    dbClient("tbl_screenings")
    .insert(screenDetails)
    .then(()=>{
        result(null,true);
    })
    .catch(err=>console.log(err));
}

const select_movie_screen_by_id = function selectMovie(screenID, result)
{
    dbClient("tbl_screenings")
    .join('tbl_movies', 'tbl_screenings.movie_id', 'tbl_movies.movie_id' )
    .select('tbl_movies.movieName', 'date', 'time', 'tbl_movies.imageName', 'auditorium_id', 'tbl_screenings.screening_id')
    .where('tbl_screenings.screening_id', screenID)
    .then(function(data){
        result(null, data);
    })
    .catch(err=>console.log(err));
}

const select_audi = function selectAudi(screenID, result){
    dbClient("tbl_screenings")
    .join('tbl_auditorium', 'tbl_screenings.auditorium_id', 'tbl_auditorium.auditorium_id' )
    .select('tbl_auditorium.auditorium_name')
    .where('tbl_screenings.screening_id', screenID)
    .then(function(data){
        result(null, data);
    })
    .catch(err=>console.log(err));
}

const select_by_movie_id = function selectScreens(movie_id, result){
    dbClient('tbl_screenings')
    .join('tbl_movies', 'tbl_screenings.movie_id', 'tbl_movies.movie_id' )
    .select('tbl_screenings.screening_id', 'tbl_movies.movieName', 'tbl_screenings.date', 'tbl_screenings.time', 'tbl_movies.imageName', 'tbl_screenings.auditorium_id')
    .where('tbl_screenings.movie_id',movie_id)
    .then(function(data){
        result(null, data)
    })
    .catch(err=>console.log(err));
}
module.exports ={
    create_screen,
    select_movie_screen_by_id,
    select_audi,
    select_by_movie_id
}