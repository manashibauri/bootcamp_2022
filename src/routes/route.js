const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel= require("../models/UserModel.js")
const UserController= require("../controller/UserController.js")
const BookModel= require("../models/BookModel.js")
const BookController= require("../controller/BookController.js")



router.post("/createUser", UserController.createUser)
router.get("/getUserData", UserController.getUsersData)
router.post("/createBook", BookController.createBook)
router.get("/getBooksData", BookController.getBooksData)
module.exports = router;
// adding this comment for no reason