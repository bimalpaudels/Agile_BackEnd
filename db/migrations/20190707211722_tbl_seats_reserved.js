
exports.up =async function(knex, Promise) {
    await knex.schema.hasTable("tbl_seats_reserve");
  
    return await knex.schema.createTable("tbl_seats_reserve", table=>{
        table.increments("seat_reserved_id").primary(),
        table.integer("reservation_id").unsigned(),
        table.integer('screen_id').unsigned(),
        table.string("seat_no"),
        table.foreign("reservation_id").references("tbl_reservation.reservation_id"),
        table.foreign("screen_id").references("tbl_screenings.screening_id");
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTable("tbl_seats_reserve");  
  };
  