const accountId = 144553
let accountEmail = "Himanshu@gmail.com"
var accountPassword = "12345"
accountCity = "Vadodara"
let accountState;

accountEmail = "Test@gmail.com"
accountPassword = "Test"
accountCity = "Surat"

//accountId = 2 //not allowed

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])