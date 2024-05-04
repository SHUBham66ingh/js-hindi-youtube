//same datatype>>>>>
//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);

// not same data type>>>>>
console.log("2">1); // true
console.log("02">1); // true
// avoid this types of conversion.....
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

console.log(undefined==0) //false
console.log(undefined>0) //false
console.log(undefined<0) //false

// '===' this checks data and datatype>>>>>>>>>
console.log("2"===2);


// done>>>>>>>>>>>>>>>>>>