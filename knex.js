const knex = require('knex') ({
  client: 'pg',
  connection: 'postgres://localhost:5432/users'
})

const getUsers = function() {
  const query = knex
    .select('id', 'users', 'address')
    .from('users')
}

module.exports = {
  getUsers: getUsers
}
