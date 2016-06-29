
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, 
      email: 'gelsey.torres@gmail.com',
      name: 'Gelsey',
      password: ''
    }),
    knex('users').insert({id: 2, 
      email: 'someone@somedomain.org', 
      name: 'Person 1',
      password: ''
    }),
    knex('users').insert({id: 3, 
      email: 'someone2@somedomain.org',
      name: 'Person 2',
      password: ''
    })
  );
};
