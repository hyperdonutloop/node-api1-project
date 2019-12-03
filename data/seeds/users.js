exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          name: 'Samwise Gamgee',
          bio: 'Gardener and poet. Married to Rose Cotton',
        },
        {
          name: 'Frodo Baggins',
          bio: 'The ring bearer',
        },
        {
          name: 'Ryan',
          bio: 'Loves Cookies'
        },
        {
          name: 'Jaytee',
          bio: 'Loves Brownies'
        },
        {
          name: 'Adam',
          bio: 'Loves Dogs'
        },
        {
          name: 'Hugo',
          bio: 'Loves Cats'
        },
      ]);
    });
};
