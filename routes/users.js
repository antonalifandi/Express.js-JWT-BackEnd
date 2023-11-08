const express = require("express");
const router = express.Router();
const usersHandler = require('./handlers/users');
const usersIdHandler = require('./handlers/id');


//Get all users data
router
.route('/')
  .get(usersHandler.get)
  .post(usersHandler.post);


//Create a user data
router
.route('/:userId')
.get(usersIdHandler.get)
.put(usersIdHandler.put)
.delete(usersIdHandler.delete);

module.exports = router;
