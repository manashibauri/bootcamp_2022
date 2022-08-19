const { count } = require("console")
const BookModel= require("../models/bookModel")
//-----------1---------------
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//-------------2--------------------------------------------------------------------------
const getBookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}
//----------------3------------------------------------------------------------------------
const getBooksInYear= async function (req, res){
    let userYear = req.body.userYear
    let allBooks = await BookModel.find({year:{seq:userYear}})
    console.log("myBook",allBooks)
    res.send({msg:allBooks})
}
//------------------4----------------------------------------------------------------------
const getParticularBooks= async function (req, res){
    /*let userYear = req.body.userYear
    let allBooks = await BookModel.find( { year : 2020 , "bookName": "intro to tech" } )
    console.log("Books",allBooks)
    res.send({msg:Books_are})
    let input= req.body
    let specificBooks = await bookModel.find(req.body)
    res.send({msg:specificBooks})*/
    let userYear = req.body.userYear
    let userbookName = req.body.userbookName
    let input = req.body;
    let booksinput= await BookModel.find({ year:{seq:userYear}, bookName:{seq:userbookName}});
      res.send({msg : booksinput});
}
//-----------------5-------------------------------------------------------------------
const getXINRBooks = async function(req, res){
    let allBooks= await BookModel.find({"price.indiaPrice":{$in :["Rs 100","Rs 200","Rs 500"]}})
    res.send({msg: allBooks})
}
//--------------------------6-----------------------------------------------------    
const getRandomBooks= async function(req,res){
    let allBooks= await BookModel.find({$or: [{stockavailable: true},{totalpages:500}]})
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks