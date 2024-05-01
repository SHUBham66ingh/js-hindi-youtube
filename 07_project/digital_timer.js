const clock =document.getElementbyId('clock')
// const clock= document.querySelector('#clock')

let date= new date()
console.log(date.toLocalTimeString())


setInterval(function()
{
    let date =new Date();
    // console.log(date.toLocalTimeString())
    clock.innerHTML = data.toLocaleTimeString();

} , 1000);