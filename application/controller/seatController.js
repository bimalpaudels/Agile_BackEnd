var model = require("../model/seatModel");
var jwt = require('jsonwebtoken');

const add_seats = (req, res)=>{
    // jwt.verify(req.token, 'secretkey', (err, authData)=>{
    //     if(err)
    //     {
    //         res.sendStatus(403);
    //     }
    //     else
    //     {
    //         res.json(authData);
    //     }
    // })
    console.log(req.body);
    model.add_seat(req.body, function(err, result){
        if(result){
            res.json(result);
        }
        else{
            res.json({Status:failed});
        }
    })
}

const select_seats = (req, res)=>{
    model.select_seats(req.params.screenID, req.params.audi_id, function(err, result){
        if(result)
        {
            res.json({"results":result});
        }
        else
        {
            res.json({Status:failed});
        }
    })
}

const select_by_audi_id = (req, res)=>{
    model.select_by_audi_id(req.params.audi_id, function(err, result){
        if(result){
            res.json({"results":result});
        }
        else
        {
            res.json({Status: failed});
        }
    })
}

const select_seats_by_reserve_id = (req, res) =>{
    model.select_seats_by_reserve_id(req.params.reserve_id, function(err, result){
        if(result)
        {
            res.json(result);
            console.log(result);
        }
        else
        {
            res.json({Status: failed});
        }

    })
}

const select_screen_id = (req, res) =>{
    model.select_screen_id(req.params.reserve_id, function(err, result){
        if(result)
        {
            res.json(result[0].screen_id);
        }
        else
        {
            res.json({Status:failed});
        }
    })
}

module.exports={
    add_seats, select_seats, select_by_audi_id, select_seats_by_reserve_id, select_screen_id
}