const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

const getUserById = (id) => {  
    pool.query('SELECT * FROM public."user" WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      return results.rows
    })
}

const createUser = (id, name) => {  
    pool.query('INSERT INTO public."user" (id, name) VALUES ($1, $2)', [id, name], (error, result) => {
      if (error) {
        throw error
      }
      console.log(`User added with ID: ${result.rows}`);
    })
}

module.exports = {createUser, getUserById}