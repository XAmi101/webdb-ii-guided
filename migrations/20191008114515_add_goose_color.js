exports.up = function(knex) {
  return knex.schema.table('geese', tbl => {

    //this adds new color column
    tbl.string('color', 40);
  });
};

exports.down = function(knex) {
  return knex.schema.table('geese', tbl => {
    tbl.dropColumn('color');
  });
};
