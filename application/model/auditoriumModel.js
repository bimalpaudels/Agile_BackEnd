const configuration = require("../../db/knex");
const path = require("path");
const knex = require("knex");
const dbClient = knex(configuration);

const create_auditorium = function createAuditorium(details, result){
    dbClient("tbl_auditorium")
    .insert(details)
    .then(()=>{
        result(null, true)
    })
    .catch(err => console.log(err));
}

const select_auditorium = function selectAuditorium(result){
    dbClient('tbl_auditorium')
    .select()
    .then(function(data){
        result(null, data);
    })
    .catch(err=>console.log(err));
}

const select_audi_by_id = function selectByID(audi_id, result){
    dbClient('tbl_auditorium')
    .select()
    .where({auditorium_id:audi_id})
    .then(function(data){
        result(null, data)
    })
    .catch(err=> console.log(err));
}

module.exports={
    create_auditorium, select_auditorium, select_audi_by_id
}