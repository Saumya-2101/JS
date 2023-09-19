const accountId = 1243
let accountEmail = "saumya@gmail.com"
var accountPassword = "5678"
accountCity = "jaipur"
let accountState;


// accountId = 2  // not allowed 

accountEmail = "sp@gmail.com"
accountPassword = "21345"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var because of issues in block space and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

