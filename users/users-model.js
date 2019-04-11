const db = require('../data/dbConfig.js')

module.exports = {
    create,
    remove,
    getAll,
    findById
}

async function create(user){
    const [ id ] = await db('users').insert(user)

    return findById(id)
} 

function remove(id){
    return db('users')
    .where('id', id)
    .del()
}

function findById(id){
    return db('users')
    .where('id', id)
    .first()
}

function getAll() {
    return db('users');
  }




