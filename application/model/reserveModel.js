const configuration = require("../../db/knex");
const path = require("path");
const knex = require("knex");
const dbClient = knex(configuration);

const create_reservation = function newReservation(reserveDetails, result){
    dbClient("tbl_reservation")
    .insert(reserveDetails)
    .then(()=>{
        result(null, true);
    })
    .catch(err=>console.log(err));
}

const select_reservation = function reservation(userID, reservationTime, result){
    dbClient('tbl_reservation')
    .select()
    .where({user_id: userID, reserve_time:reservationTime})
    .then(function(data){
        result(null, data)
    })
    .catch(err => console.log(err));
}

module.exports={
    create_reservation, select_reservation
}