const express = require('express');
//const introModule = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const helperModule = require('../util/helper')
const formatterModule = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', introModule.name)
    introModule.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
router.get('/test-me', function (req, res) {
    loggerModule.module();
    helperModule.Date();
    helperModule.currentmonth();
    helperModule.getBatchInfo();
    formatterModule.Trim('my string');
    formatterModule.lowercase();
    formatterModule.uppercase();
    res.send('My second ever api!') 
});
module.exports = router;
// adding this comment for no reason


