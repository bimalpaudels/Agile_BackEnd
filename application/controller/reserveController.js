var model = require("../model/reserveModel");

const new_reservation = (req, res)=>{
    model.create_reservation(req.body, function(err, result){
        if(result)
        {
            res.json(result);
        }
        else
        {
            res.json({Status:false});
        }
    })
}

const select_reservation = (req, res)=>{
    model.select_reservation(req.params.user_id, req.params.reserve_time, function(err, result){
        if(result)
        {
            res.json(result[0].reservation_id);
        }
        else
        {
            res.json({Status: false});
        }
    })
}

module.exports={
    new_reservation, select_reservation
}