var model = require("../model/screenModel");

const add_screen = (req, res)=>{
    model.create_screen(req.body, function(err, result){
        if(result){
            res.json(result);
        }
        else
        {
            res.json({Success:failed});
        }
    })
}

const select_screen = (req, res)=>{
    model.select_movie_screen_by_id(req.params.screenID, function(err, result){
        if(result){
            res.json({movieName:result[0].movieName, date:result[0].date, time:result[0].time});
        }
        else
        {
            res.json({"success":false});
        }
    })
}

const select_audi = (req, res)=>{
    model.select_audi(req.params.screenID, function(err, result){
        if(result)
        {
            res.json(result[0].auditorium_name)
        }
        else
        {
            res.json({success: false});
        }
    })
}

const select_by_movie_id = (req, res)=>{
    model.select_by_movie_id(req.params.movieID, function(err, result){
        if(result)
        {
            res.json(result);
        }
        else
        {
            res.json({success:false});
        }
    })

}

module.exports={
    add_screen,
    select_screen,
    select_audi,
    select_by_movie_id
}