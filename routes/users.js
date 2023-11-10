const express = require("express");
const admin = require("../middlewares/admin");
const verifyToken = require("../middlewares/verify-token");
const router = express.Router();
const usersHandler = require("./handlers/users");
const usersIdHandler = require("./handlers/id");
//Get all users data
router
.route("/")
.get(verifyToken, admin, usersHandler.get);
//Create a user data
router
.route("/:userId")
.get(verifyToken, admin, usersIdHandler.get)
.put(verifyToken, admin, usersIdHandler.put)
.delete(verifyToken, admin, usersIdHandler.delete);

module.exports = router;
