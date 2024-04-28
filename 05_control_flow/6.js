// const coding=["js","ruby","java","cpp","python"];

// const value = coding.forEach((item)=>
// {
//   console.log(item);
// })

// console.log(value);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> {
//       return num>4  })

const newNums=[]

myNums.forEach((num)=> 
{
    if(num>4)
    {
        newNums.push(num)
    }

})
console.log(newNums);

const books=[
    {title:'book one',genre:'fiction',publish:1981,edition:2004},
    {title:'book two',genre:'Non-fiction',publish:1981,edition:2004},
    {title:'book three',genre:'history',publish:2004,edition:2004},
    {title:'book four',genre:'science',publish:1981,edition:2004},
];

const userBooks = books.filter((bk) => bk.genre==='history')
userBooks = books.filter((bk) => {bk.publish>2000})

console.log(userBooks);