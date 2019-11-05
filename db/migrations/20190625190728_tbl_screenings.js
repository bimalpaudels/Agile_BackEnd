
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("tbl_screenings");

  return await knex.schema.createTable("tbl_screenings", table=>{
      table.increments("screening_id").primary(),
      table.time("time", {precision:6}),
      table.date("date"),
      table.integer("movie_id").unsigned(),
      table.foreign("movie_id").references("tbl_movies.movie_id"),
      table.integer("auditorium_id").unsigned(),
      table.foreign("auditorium_id").references("tbl_auditorium.auditorium_id")
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("tbl_screenings");
};
