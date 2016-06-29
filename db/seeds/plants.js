
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('plants').del(),

    // Inserts seed entries
    knex('plants').insert({id: 1, 
      name: 'Morus rubra', 
      commonName: 'Red Mulberry', 
      family: 'Moraceae', 
      coordinates: '', 
      photoUrl: '', 
      type: 'tree'}),
    knex('plants').insert({id: 2, 
      name: 'Portulaca oleracea', 
      commonName: 'Purslane', 
      family: 'Portulacaceae', 
      coordinates: '', 
      photoUrl: '', 
      type: 'annual'}),
    knex('plants').insert({id: 3, 
      name: 'Amelanchier arborea', 
      commonName: ['Downy Serviceberry', 
      'Alabama Serviceberry', 
      'Juneberry', 
      'Common Serviceberry', 
      'Downy Serviceberry'].join(", "), 
      family: 'Rosaceae', 
      coordinates: '', 
      photoUrl: '', 
      type: 'tree'})
  );
};
