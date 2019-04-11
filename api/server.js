const express = require('express');

const users = require('../users/users-model.js')

const server = express()

server.use(express.json())

server.get('/', async (req, res) => {
    res.status(200).json({ Challenge: 'Server up and running' });
  });

//Get all users
server.get('/users', (req, res) => {
    users.getAll().then(users => {
        res.status(200).json(users)
    }).catch(error => {
        res.status(500).json(error)
    });
  });

// Get a single user
server.get('/users/:id', (req, res) => {
    const { id } = req.params
    users.findById(id).then(user => {
        if(!user){
            res.status(404).json({errorMessage: 'This user does not exist'})
        }
        res.status(200).json(user)
    }).catch(error => {
        res.status(500).json(error)
    })
})

//Create user
server.post('/users', (req, res) => {
    const { name } = req.body

    users.create({name}).then(user => {
        res.status(201).json({user})
    }).catch( error => {
        res.status(500).json(error)
    })
  });

  //Delete user
server.delete('/users/:id', (req, res) => {
    const { id } = req.params 
    users.remove(id).then(user => {
        res.status(204).end()
    }).catch( error => {
        res.status(500).json(error)
    })
  })

  module.exports = server;