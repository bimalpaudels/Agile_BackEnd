
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("tbl_auditorium");

  return await knex.schema.createTable("tbl_auditorium", table =>{
      table.increments("auditorium_id").primary(),
      table.string("auditorium_name")
  })
};

exports.down = function(knex, Promise) {
     knex.schema.dropTable("tbl_auditorium");
};
