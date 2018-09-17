
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bands', bands => {
    bands.increments()
    bands.text('band_name')
    bands.text('genre')
    bands.text('website')
    bands.date('date')
    bands.text('location')
    bands.text('email')
    bands.text('message')
    bands.bool('booked')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bands')

};
