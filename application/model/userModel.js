const configuration = require("../../db/knex");
const path = require("path");
const knex = require("knex");
const dbClient = knex(configuration);

const register = function createUser(user, res) {
    var email = user.email;
    dbClient("tbl_user")
    .select()
    .where({email:email})
    .then(function(result){
        if(!result || !result[0])
        {
            dbClient("tbl_user")
            .insert(user)
            .then(()=>{
                res(null, true);
            })
            .catch(err => console.log("Error:", err));
        }
        else
        {
            res(null, false);
        }
    });

}

const login = function checkUser(user, res) {

    dbClient("tbl_user")
    .select()
    .where(user)
    .then(function(result){
        if(!result || !result[0])
        {
            res(null, false);
        }
        else
        {
            res(null, result);
        }
    })
    .catch(err => console.log("Error", err));
}

const select_user_by_ID = function selectUserByID(userID, result){
    dbClient("tbl_user")
    .select()
    .where({user_id:userID})
    .then(function(data){
        result(null, data);
    })
    .catch(err => console.log(err));
}

const update_user = function updateUser(userID, user, res){
    dbClient("tbl_user")
    .where({user_id:userID})
    .update({
        firstName:user.firstName,
        lastName: user.lastName,
        phoneNumber:user.phoneNumber,
        email: user.email,
        password: user.password,
        userStatus: user.userStatus,
        image_name: user.image_name
    })
    .then(function(data){
        res(null, data);
    })
    .catch(err => console.log(err));
}
module.exports={
    register, login, update_user, select_user_by_ID
}