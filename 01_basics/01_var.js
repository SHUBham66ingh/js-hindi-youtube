const accountId = 14453
let accountEmail="hits@gmail.com"
var accountPassword ="12345"
accoutnCity="jaipur"
let accountState = " ";

//accountId=2;// not allowed
accountId=12355;
accountEmail = "shubham@gmail.com"
accountPassword= "124677"
accoutnCity="bengaluru"

/*
prefer not to use var
because of issue in block scope and fuctional scope
*/


console.log(accountId);
console.log([accountId]);

console.table([accountId,accountEmail,accountPassword,accoutnCity,accountState]);

