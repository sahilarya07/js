const accountid=123 
// cannot be changed
let accountemail="sasa@gmail.com"
var  accountpass="123"
accountcity="pakistan"
// not allowed
// accountid=2
accountemail="ssasa@gmail.com"
accountpass="1234"
accountcity="pakistani"

console.table([accountid,accountemail,accountpass,accountcity])
// prefer not to use var because of issue in 
// block and function scope account
let accountstate; 
// undefined
