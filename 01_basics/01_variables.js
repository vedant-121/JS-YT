const accountId = 144553
let accountEmail = "abc.xyz@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ab@xyz.com"
accountPassword = "21212121"
accountCity = "Bangalore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope, i.e {} and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])