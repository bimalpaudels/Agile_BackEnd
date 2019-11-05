
exports.up =async function(knex, Promise) {
  await knex.schema.hasTable("tbl_reservations");

  return await knex.schema.createTable("tbl_reservations", table=>{
      table.increments("reservation_id").primary(),
      table.integer("screening_id").unsigned(),
      table.integer("user_id").unsigned(),
      table.foreign("screening_id").references("tbl_screenings.screening_id"),
      table.foreign("user_id").references("tbl_user.user_id")
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("tbl_reservations");
};
