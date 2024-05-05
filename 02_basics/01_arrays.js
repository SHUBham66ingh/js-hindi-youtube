// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    [0,1,2,3,4,5,6]
// myArr.push(7)    [0,1,2,3,4,5,6,7]  
// myArr.pop()      [0,1,2,3,4,5,6]

// myArr.unshift(9)  [9,0,1,2,3,4,5,6]
// myArr.shift()     [0,1,2,3,4,5,6]

// console.log(myArr.includes(9)); false
// console.log(myArr.indexOf(3));  3

// const newArr = myArr.join()

// console.log(myArr);  [0,1,2,3,4,5]
// console.log( newArr);  0,1,2,3,4,5 // converts into string datatype


// slice, splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// it does not change the original array....

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it does change th original array.....
console.log("C ", myArr);
console.log(myn2);


// done>>>>>>>>>>>>>>>