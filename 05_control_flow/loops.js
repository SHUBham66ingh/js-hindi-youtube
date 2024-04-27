// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5)
    {
   // console.log("5 is best number");
}
//console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value:${i}`)
    for (let j = 1; j <=10 ; j++) {
    console.log(`inner loop ${j} and ${i}`);
    console.log(i + '*' + j + '=' +  i*j) 
    }  
}

let myArray = ["flash","batman","superman"];
for(let i=0;i < myArray.length;i++)
{
    const element= myArray[i];
    console.log(element);
}

//break and continue
for(i=1;i<10;i++)
{
    const elemnt=array[i];
    if(i==5)
    {
        console.log(array[i]);
        break;
    }
}