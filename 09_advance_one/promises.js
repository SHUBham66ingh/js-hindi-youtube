// fetch('https://something.com').then().catch().finally()
const promiseOne= new Promise(function(resolve,reject){
// do any async task
//  db calls, CRYPTOgraphically, network
setTimeout(function()
{
  console.log('async task is complete');
  resolve()
},1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
console.log("Async task 2");
    resolve()
    },1000)
}).then(function(){
          console.log("async 2 is resolved")                          
})

const promiseOneThree = new Promise(function(resolve,reject){
   setTimeout(function(resolve, reject){
     resolve({username:"chai",email:"chai@gmail.com"})
   },1000)
})

promiseOneThree.then(function(user){
 console.log(user)
})


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true;
    if(!error)
        {
resolve({username: "shubham",password:123454})
        } else{
            reject('ERROR: something went wrong')
        }
    },1000)
})


promiseFour
.then((user)=>{
  console.log(user);
  return user.username
}).then((username) => {
console.log(username);
}).catch(function(error){
  console.log("error");
}).finally(() => console.log("the promise is either resolved or rejected"));


const promiseFive= new promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error)
        {
resolve({username: "shubham",password:123454})
        } else{
            reject('ERROR:js something went wrong')
        }
    },1000)
});


async function  consumePromiseFive(){
   const response= await promiseFive
   console.log(response);
}

consumePromiseFive()
 