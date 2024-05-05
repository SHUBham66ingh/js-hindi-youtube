const name="hitesh"
const repoCount= 50

// console.log(name+repocount+"value");// hitesh50 value
console.log(`hello my name is ${name} and my repo is ${repoCount}`);// backtick

const gameName= new String('shubham')// type object

console.log(gameName[0]);// s
console.log(gameName.__proto__);//{}

console.log(gameName.length);//8
console.log(gameName.toUpperCase());//SHUBHAM
console.log(gameName.charAt(2))//uuuu
console.log(gameName.indexOf('u'))//2

const newString = gameName.substring(0,4) // 4 not included shub
console.log(newString);// shub


const anotherString = gameName.slice(-7,4) //  hub
console.log(anotherString);

const newStringOne = "  hitesh ";
console.log(newStringOne); // hitesh with space
console.log(newStringOne.trim()); // hitesh with no space



const url = "https://shubham.com//shubham%20singh"
console.log(url.replace('%20','-'));"https://shubham.com//shubham-singh"
console.log(url.includes('shubham'));// true


console.log(gameName.split('-'));


// done>>>>>>>>>>>>>>>>>>>>>>
