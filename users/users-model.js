const db = require('../data/dbConfig.js')

module.exports = {
    create,
    remove,
    getAll
}

async function create(user){
    const [ id ] = await db('users').insert(user)

    return db('users').where({id}).first()
} 

function remove(id){
    return db('users')
    .where('id', id)
    .del()
}

function getAll() {
    return db('users');
  }




