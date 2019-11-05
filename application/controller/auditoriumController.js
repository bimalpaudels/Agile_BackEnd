var model = require("../model/auditoriumModel");

const add_auditorium = (req, res) =>{
    model.create_auditorium(req.body, function(err, result){
        if(result)
        {
            res.json(result);
        }
        else
        {
            res.json({status:false});
        }
    })
}

const select_all = (req, res) =>{
    model.select_auditorium(function(err, result){
        if(result){
            res.json({"results":result});
        }
        else
        {
            res.json({success:failed});
        }
    })
}

const select_by_id = (req, res)=>{
    model.select_audi_by_id(req.params.audi_id, function(err, result){
        if(result)
        {
            res.json(result);
        }
        else
        {
            res.json({status:false, message:failed});
        }
    })
}

module.exports={
    add_auditorium, select_all, select_by_id
}