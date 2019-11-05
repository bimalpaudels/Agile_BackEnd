
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("tbl_movies");

  return await knex.schema.createTable("tbl_movies", table => {
      table.increments("movie_id").primary(),
      table.string("movieName"),
      table.text("movieDesc"),
      table.string("imageName"),
      table.date("releaseDate")
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("tbl_movies");
};
