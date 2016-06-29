(function() {

  var createUsers = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('email').unique();
      table.string('name');
      table.string('password');
      table.timestamp('created_at')
	.notNullable()
	.defaultTo(knex.raw('now()'));
      table.timestamp('updated_at')
	.notNullable()
	.defaultTo(knex.raw('now()'));
    });
  };

exports.up = function(knex, Promise) {
  return Promise.all([createUsers(knex)]); 
};

exports.down = function(knex, Promise) {
  
};
}());
