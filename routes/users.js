const express = require("express");
const verifyToken = require('../middlewares/verify-token');
const router = express.Router();
const usersHandler = require('./handlers/users');
const usersIdHandler = require('./handlers/id');


//Get all users data
router
.route("/").get(verifyToken, usersHandler.get).post(verifyToken, usersHandler.post);


//Create a user data
router
.route("/:userId")
.get(verifyToken, usersIdHandler.get)
.put(verifyToken, usersIdHandler.put)
.delete(verifyToken, usersIdHandler.delete);

module.exports = router;
