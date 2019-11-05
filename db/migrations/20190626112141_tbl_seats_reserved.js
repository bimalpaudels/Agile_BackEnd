
exports.up =async function(knex, Promise) {
    await knex.schema.hasTable("tbl_seats_reserved");
  
    return await knex.schema.createTable("tbl_seats_reserved", table=>{
        table.increments("seat_reserved_id").primary(),
        table.integer("reservation_id").unsigned(),
        table.integer("seat_id").unsigned(),
        table.foreign("reservation_id").references("tbl_reservations.reservation_id"),
        table.foreign("seat_id").references("tbl_seats.seat_id")
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTable("tbl_seats_reserved");  
  };
  