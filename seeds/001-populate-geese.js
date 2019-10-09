
/*
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
*/


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geese')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('geese').insert([
        { name: 'Ben Aflack', color: 'white' },
        { name: 'Goose Bumps', color: 'white' },
        { name: 'Tom Honks', color: 'white' },
      ]);
    });
};