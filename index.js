const express = require('express');

const db = require('./data/db.js');

const server = express();

// Write endpoints to perfom the following: 

// POST 

// GET - returns an array of all user objects

// GET

// DELETE 

// PUT

const port = 4000;
server.listen(port, () =>
  console.log(`\n ** API running on port ${port} **\n`)
);