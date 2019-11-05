const configuration = require("../../db/knex");
const path = require("path");
const knex = require("knex");
const dbClient = knex(configuration);

const add_seat = function createSeat(seatDetails, result){
    dbClient("tbl_seats_reserve")
    .insert(seatDetails)
    .then(()=>{
        result(null, true)
    })
    .catch(err=>console.log(err));
}

 const select_seats = function selectSeats(screenID, audiID, result){
     dbClient("tbl_seats")
     .join('tbl_auditorium', 'tbl_seats.auditorium_id','tbl_auditorium.auditorium_id')
     .join('tbl_screenings', 'tbl_auditorium.auditorium_id', 'tbl_screenings.screening_id')
     .select('tbl_seats.seat_no', 'tbl_seats.row')
     .where('tbl_screenings.screening_id', screenID)
     .where('tbl_screenings.auditorium_id', audiID)
     .then(function(data){
         result(null, data);
     })
     .catch(err=>console.log(err));
 }

const select_by_audi_id = function selectByAudiID(audi_id, result){
    dbClient('tbl_seats')
    .select()
    .orderBy('row')
    .where({auditorium_id:audi_id})
    .then(function(data){
        result(null, data);
    })
    .catch(err=>console.log(err));
}

const select_seats_by_reserve_id = function selectSeatsByReserveID(reserveID, result)
{

    dbClient('tbl_seats_reserve')
    .select()
    .where({reservation_id:reserveID})
    .then(function(data)
    {
        result(null, data);
    })
    .catch(err =>console.log(err));
}

const select_screen_id = function selectScreen(reserveID, result)
{
    dbClient("tbl_seats_reserve")
    .select()
    .where({reservation_id:reserveID})
    .then(function(data){
        result(null, data);
    })
    .catch(err => console.log(err));
}

module.exports={
    add_seat, select_seats, select_by_audi_id, select_seats_by_reserve_id, select_screen_id
}