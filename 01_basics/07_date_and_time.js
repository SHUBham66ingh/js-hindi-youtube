
// dates
let myDate= new Date;
//console.log(myDate.toString());// sat apr 20 2024 14:11:56
//console.log(myDate.toDateString());// sat apr 20 2024
//console.log(myDate.toLocaleString());// 4/20/2024 2:11:56PM
//console.log(typeof myDate); // object

let myCreatedDate = new Date[2023,0,23] ;// mon jan 23 2023
let myCreatedDate1 = new Date[2023,0,23] ;// mon jan 23 2023 5:03 am
let myCreatedDate2 = new Date("2023-01-15");
//console.log(myCreatedDate.toDateString());


let myTimeStamp=Date.now();
console.log(myTimeStamp);//89897878
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // 3 + 1

newDate.toLocaleString('default',{
    weekday:"long",
});


// done>>>>>>>>>>>>>>>
