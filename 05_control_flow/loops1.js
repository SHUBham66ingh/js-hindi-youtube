// for of
// ["","".""]
// [{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings="hello world"
for(const greet of greetings)
{
    console.log(greet);
}
//each char is ${greet}
//maps

const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"united staets of america")
map.set('fr',"France")

//console.log(map);

for(const [key,value] of map)
{
    console.log(key, '-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'spiderman',
    'game3':'GTA'
}

for (const [key,value] of myobject) {
     console.log(key,'-',value);
}

