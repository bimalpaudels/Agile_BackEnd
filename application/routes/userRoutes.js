const express = require("express");
const app = express();
var user = require("../controller/userController");
var movie = require("../controller/movieController");
var image = require("../controller/imageController");
var auditorium = require("../controller/auditoriumController");
var seat = require("../controller/seatController");
var screen = require("../controller/screenController");
var reserve = require("../controller/reserveController");

app.post('/user/register', user.register);
app.post('/user/login', user.login);
app.get('/user/:userID', user.get_user_by_ID);
app.put('/user/update/:userID', user.update_user);


app.post('/movie/add', movie.add_movie );
app.get('/movies/select_all', movie.select_all);
app.get('/movie/:movieID', movie.get_movie_by_ID);
app.post('/upload/movie/image', image.upload_image);
app.put('/movie/update/:movieID', movie.update_movie);


app.post('/auditorium/add',auditorium.add_auditorium);
app.get('/auditoriums/select_all', auditorium.select_all);
app.get('/auditorium/select_by_id/:audi_id', auditorium.select_by_id);

app.post("/seat/add", seat.add_seats);
app.get('/seats/select/:screenID/:audi_id', seat.select_seats);
app.get('/seat/select_by_audi_id/:audi_id', seat.select_by_audi_id);
app.get('/select_seats/:reserve_id', seat.select_seats_by_reserve_id);
app.get('/select_screen_id/:reserve_id', seat.select_screen_id);

app.post("/screen/add", screen.add_screen);
app.get('/screen/select/:screenID', screen.select_screen);
app.get('/screen/select_audi/:screenID', screen.select_audi);
app.get('/select_screen_by/movie_id/:movieID', screen.select_by_movie_id);

app.post("/reserve/add", reserve.new_reservation);
app.get('/reservation/select/:user_id/:reserve_time', reserve.select_reservation);

app.use(express.static("public"));
//Verify token
function verifyToken(req,res, next )
{
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else
    {
        res.sendStatus(403);
    }
}

module.exports = app;