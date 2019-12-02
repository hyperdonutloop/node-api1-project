const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({ api: 'up and running...' });
})
// Write endpoints to perfom the following: 

// POST 
server.post('/api/users', (req, res) => {
  const userData = req.body;
  const name = req.body.name;
  const bio = req.body.bio;
  
  if (!name || !bio) {
    res.status(400).json({ errorMessage: 'Please provide a name and bio for the user.' })
  } else {
    db.insert(userData)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log('error on POST /users', error);
      res.status(500).json({ errorMessage: 'There was an error while saving the user to the database' })
    })
  }
})

// GET - returns an array of all user objects
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log('error on GET /users', error);
      res.status(500).json({ errorMessage: 'The users information could not be retrieved' });
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
      res.status(404).json({ errorMessage: 'The user with the specified ID does not exist' });
    })
})

// DELETE - removes user with specified id 
server.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then(removed => {
      if (!removed) {
        res.status(200).json({ message: 'user successfully removed ', removed });
      } else {
        res.status(404).json({ message: 'user not found '});
      }
    })
    .catch(error => {
      console.log("error on DELETE /api/users/:id", error);
      res.status(500).json({ errorMessage: 'error deleting the user' })
    })
})

// PUT

const port = 4000;
server.listen(port, () =>
  console.log(`\n ** API running on port ${port} **\n`)
);