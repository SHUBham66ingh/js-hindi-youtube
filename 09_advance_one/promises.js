// fetch('https://something.com').then().catch().finally()
const promiseOne= new Promise(function(resolve,reject){
// do any async task
//  db calls, CRYPTOgraphically, network
setTimneout(function()
{
  console.log('async task is complete')
},1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})
