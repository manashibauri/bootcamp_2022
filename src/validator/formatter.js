let trim = function(){
    const string = 'FunctionUp'
    console.log(string.trim());
}
trim()

//---------------------------------------------------------

let LowerCase = function(){
    const text = 'LOWER CASE'
    console.log(text.toLowerCase())
}
LowerCase()
//---------------------------------------------------------
let UpperCase = function(){
    const text1 = 'upper case'
    console.log(text1.toUpperCase())
}
UpperCase()



//----------------------------------------------------
module.exports.Trim = trim
module.exports.lowercase = LowerCase
module.exports.uppercase = UpperCase