
function sayMyName()
{
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName()

function addTwoNumbers(number1, number2)
{
    let result=number1+number2
    return result
    console.log("hitesh");
}

const result= addTwoNumbers(2,3);

//console.log("Result: ",result);

function loginUserMessage(username)
{
    if(username===undefined)
    {
        console.log("please enetr a valid user name");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("shubham"));
