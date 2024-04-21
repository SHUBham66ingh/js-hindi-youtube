//const tinderUser = new Object() // singleton

const tinderUser = {} // non singleton

 tinderUser.id="123abc";
 tinderUser.name="sammy";
 tinderUser.isLoggedIn= false;

 //console.log(tinderUser);

 const regularUser ={
    email : "shubham1041singh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
          }
     }  
 }

//console.log(regularUser?.fullname.userFull.firstname);

const obj1 = {1:"a" , 2: "b"};
const obj2 = {3:"a" , 4: "b"};

//const obj3=Object.assign({},obj1,obj2);

console.obj3 = {...obj1,...obj2};
console.log(obj3);


