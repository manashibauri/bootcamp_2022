// current Date-----------------------------------
let currentDate = function(){
const today = new Date();

date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

 console.log('Current Date',today)
}
currentDate()

// current Month----------------------------------------------------

let month = function(){
const nameOfMonth = new Date().toLocaleString('default', {month: 'long'});
    console.log(nameOfMonth);
 }
month()
  //-----------------------------------------------------------------

  let getBatch = function() {
    const BatchName = "Plutonium" ;
    const WeekDay = "W3D5" ;

    console.log(BatchName , WeekDay ,'the topic for today is Nodejs module system' );

  }
  getBatch()

  module.exports.Date = currentDate
  module.exports.currentmonth = month
  module.exports.getBatchInfo = getBatch
  
