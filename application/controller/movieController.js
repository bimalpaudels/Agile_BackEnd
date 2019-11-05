var model = require('../model/movieModel');

const add_movie = (req, res) =>{
    var movieDetails = req.body;
    model.add_movie(movieDetails, function(err, result){
        if(result)
        {
            res.json({Status: true});
        }
        else
        {
            res.json({Status: false});
        }
    })
}

const select_all = (req, res) => {
    model.select_all_movies(function(err, result){
        if(result)
        {
            res.json({Status:true, result});
        }
        else{
            res.json({Status: false});
        }
    })
}

const get_movie_by_ID = (req, res) =>{
    model.select_movie_by_ID(req.params.movieID, function(err, result){
        if(result)
        {
            res.json(result);
        }
        else{
            res.json({Status:false});
        }
    })
}

const update_movie = (req, res) =>{
    model.update_movie(req.params.movieID, req.body, function(err, result){
        if(result)
        {
            res.json(result);
        }
        else
        {
            res.json({Status: false});
        }
    })
}

module.exports = 
{
    add_movie, select_all, get_movie_by_ID, update_movie
}