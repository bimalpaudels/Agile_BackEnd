
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("tbl_seats");

  return await knex.schema.createTable("tbl_seats", table=>{
      table.increments("seat_id").primary(),
      table.string("row"),
      table.string("seat_no"),
      table.integer("auditorium_id").unsigned(),
      table.foreign('auditorium_id').references("tbl_auditorium.auditorium_id")
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("tbl_seats");
};
