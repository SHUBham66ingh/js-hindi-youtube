const name="hitesh"
const repoCount= 50

// console.log(name+repocount+"value");
console.log(`hello my name is ${name} and my repo is ${repoCount}`);

const gameName= new String('shubh-am')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))//uuuu
console.log(gameName.indexOf('u'))//2

const newString = gameName.substring(0,4) // 4 not included
console.log(newString);//


const anotherString=gameName.slice(-7,4) //  hub
console.log(anotherString);

const newStringOne = "  hitesh ";
console.log(newStringOne); // hitesh with space
console.log(newStringOne.trim()); // hitesh with no space



const url = "https://shubham.com//shubham%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('shubham'));// true


console.log(gameName.split('-'));

