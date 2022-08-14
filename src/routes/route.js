const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
//----------------------1--------------------
router.get('/movies', function (req , res){
    let movies = ['3 Idiots', 'Harry Potter' , 'The Dark Knight' , 'Forrest Gump']
    res.send(movies)
})
//-----------------2-3---------------------------
router.get('/movies/:indexNumber', function (req , res){
    let movies = ['3 Idiots', 'Harry Potter' , 'The Dark Knight' , 'Forrest Gump']
    let index = req.params.indexNumber;
    if(index > movies.length){
        res.send("no movies exits with this id")
    }else{
        res.send(movies[index])
    }
})
//----------------4----------------------------
router.get('/films', function(req , res){
let moviesName=[{
    "id": 1,
    "name": "End Game"
    }, {
    "id": 2,
    "name": "Inception"
    }, {
    "id": 3,
    "name": "Harry Potter"
    }, {
    "id": 4,
    "name": "Finding Dory"
    }]
    res.send(moviesName)
})
//---------------------5-----------------------------
router.get('/films/:indexNumber', function(req , res){
    let moviesName=[ {"id": 1, "name": "Finding Dory"},
    {"id": 2, "name": "The Dark Knight"},
    {"id": 3, "name": "Forrest Gump"},
    {"id": 4, "name": "Inception"}]
    let index = req.params.indexNumber;
    if(index > moviesName.length){
        res.send("no movie exits with this id")
    }else{
        res.send(moviesName[index])
    }

})
module.exports = router;