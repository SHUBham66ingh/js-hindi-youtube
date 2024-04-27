const  userEmail = "shubham1041singh@gmail.com"
if(userEmail)
{
    console.log("got user email");
}
else
{
 console.log("dont have user email");
}
// false,0,-0,bigint 0n," ",null , undefined,NaN
// true,"0",1,"false"," ",[],{},function(){}
if(userEmail===0)
{
    console.log("array is empty")
}
const emptyObj={}

    if(Object.keys(emptyObj).lenght===0)
    {
      console.log("obj is empty");
    }
// nullish coalescing operator
let val;
val=5 ?? 10//5
val=null ?? 10 // 10
val=undefined ?? 15 // 15
val=null??120??20//120


console.log(val);
//terniary opeartor
// condition? true:false
const icePrice=100
icePrice>=80  ? console.log("less thamn 50") : console.log("more than 50");


