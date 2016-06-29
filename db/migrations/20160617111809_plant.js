(function() {
  var createPlants = function(knex){
    return knex.schema.createTable('plants', function(table){
      table.increments();
      table.string('name').unique();
      table.string('commonName');
      table.string('family');
      table.string('coordinates');
      table.string('photoUrl');
      table.string('type');
      table.timestamp('created_at')
	.notNullable()
	.defaultTo(knex.raw('now()'));
      table.timestamp('updated_at')
	.notNullable()
	.defaultTo(knex.raw('now()'));
    });
  };

exports.up = function(knex, Promise) {
  return Promise.all([createPlants(knex)]); 
};

exports.down = function(knex, Promise) {
  
};
}());
