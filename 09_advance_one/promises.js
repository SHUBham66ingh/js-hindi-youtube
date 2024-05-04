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
