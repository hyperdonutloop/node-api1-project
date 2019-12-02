const express = require('express');

const db = require('./data/db.js');

const server = express();

server.get('/', (req, res) => {
  res.send({ api: 'up and running...' });
})
// Write endpoints to perfom the following: 

// POST 

// GET - returns an array of all user objects
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log('error on GET /users', error);
      res.status(500)
      .json({ errorMessage: 'error getting list of users' });
    })
})


// GET - returns user object with specified id
server.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  
  db.findById(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log('error on GET /users/:id', error);
      res.status(500)
      .json({ errorMessage: 'error getting list of users by id' });
    })
})

// DELETE 

// PUT

const port = 4000;
server.listen(port, () =>
  console.log(`\n ** API running on port ${port} **\n`)
);