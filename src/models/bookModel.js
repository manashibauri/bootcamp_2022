const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String, 
        require: true
    },
    authorName: String, 
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {
        type: Number, 
        dafault: 2021
    },
    totalPages: Number,
    stockAvailable: Boolean,
    tages: [String]
    
}, { timestamps: true });


module.exports = mongoose.model('Book-collection', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
