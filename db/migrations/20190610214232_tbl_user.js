
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("tbl_user");

  return await knex.schema.createTable("tbl_user", table =>{
      table.increments("user_id").primary(),
      table.string("firstName"),
      table.string("lastName"),
      table.string("phoneNumber"),
      table.string("email"),
      table.string("password"),
      table.string("userStatus"),
      table.string("image_name")
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("tbl_user");
};
