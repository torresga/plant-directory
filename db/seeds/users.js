
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      email: 'gelsey.torres@gmail.com',
      name: 'Gelsey',
      password: ''
    }),
    knex('users').insert({
      email: 'someone@somedomain.org', 
      name: 'Person 1',
      password: ''
    }),
    knex('users').insert({
      email: 'someone2@somedomain.org',
      name: 'Person 2',
      password: ''
    })
  );
};
