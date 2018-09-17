
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {
          band_name: 'Boulder Sound Lab',
          genre: 'Jazz, Funk, Jam',
          website: 'https://www.facebook.com/bouldersoundlab/',
          date: '09/18/2018',
          location: 'Denver, CO',
          email: 'bouldersoundlab@test.com',
          message: 'Will play for free',
          booked: true
        },
        {
          band_name: 'Cycles',
          genre: 'Rock, Jam',
          website: 'http://cycles.band/cycles/',
          date: '10/04/2018',
          location: 'Boulder, CO',
          email: 'cyclesband@test.com',
          message: 'Will not play for free',
          booked: false
        }
      ]);
    });
};
