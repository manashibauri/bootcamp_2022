const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)
router.get("/getBookList", BookController.getBookList)
router.post("//:year", BookController.getBooksInYear)
router.post("/particularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks", BookController.getParticularBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;