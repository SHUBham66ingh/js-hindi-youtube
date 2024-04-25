
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
//console.log(loginUserMessage("shubham"));


function calculateCartPrice(val1,val2,...num1)
{
  return num1;
}

//console.log(calculateCartPrice(200,400,500,300));
const user={
    username:"shubham",
    price:100
}

function handleObject(anyobject)
{
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
};

handleObject(user);//

handleObject(
    {
        username:"shubh",
        price:1000
    }
)

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

