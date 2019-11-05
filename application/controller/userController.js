var jwt = require('jsonwebtoken');
var model = require("../model/userModel");


const register = (req, res) =>{
    var userdetails = req.body;
    model.register(userdetails, function(err, result){
        if(!result)
        {
            res.json({success: result, message: "Email already exists"});
        }
        else if(result)
        {
            res.json({success: result, message: "Registered Successfully"});
        }
        else
        {
            console.log(err);
        }
    });
    };

const login = (req, res) => {
    var userdetails = req.body;
    model.login(userdetails, function(err, result){
        if(result)
        {
            jwt.sign({result}, 'secretkey', (error, token)=>{
                res.json({"token":token, "userdata":result, success:true, "username":result[0].firstName, "user_id":result[0].user_id});
            })

        }
        else
        {
            res.json({success: false, "Msg": "Wrong email or password"});
        }
    })
}

const update_user = (req, res) => {
    var userdetails = req.body;
    model.update_user(req.params.userID, userdetails, function(err, result){
        if(result){
            res.json(result)
        }
        else
        {
            res.json({status:failed});
        }
    })
}

const get_user_by_ID = (req, res) => {
    var user_ID = req.params.userID;
   model.select_user_by_ID(user_ID, function(err, result){
       if(result)
       {
           res.json(result);
       }
       else{
           res.json({status:failed});
       }
   })
}
module.exports = {
    register, login, update_user, get_user_by_ID
}