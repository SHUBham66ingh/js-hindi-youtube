
// arrays

const myArr = [0,1,2,3,4,5];
const myHeroes = ["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0]);//0

// array methods

myArr.push(6)
myArr.pop()
//console.log(myArr)// [0,1,2,3,4,5]

myArr.unshift(9) // [9,0,1,2,3,4,5]
myArr.shift() // [0,1,2,3,4,5,]

//console.log(myArr.includes(9)); // false
//console.log(myArr.indexOf(3));

const newArr= myArr.join()
//console.log(myArr);
//console.log(newArr);// conert into string


// slice,spice
console.log(" A ",myArr);// A [0,1,2,3,4,5,]
const myn1 = myArr.slice(1,3); // [1,2]
console.log(myn1);// [1,2]

console.log(" B ",myArr);// B [0,1,2,3,4,5]
const myn2 = myArr.splice(1,3); // 
console.log(" C ",myArr); // C [0,4,5]
console.log(myn2);// [1,2,3]



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));