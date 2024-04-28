const a=[1,2,3]
//  const b=a.reduce(function(acc,currval)
// {
//     console.log(`acc :${acc} and curravl: ${currval} `)
//     return acc +currval;
// },0)
// 2+6=8

const b=a.reduce((acc,curravl)=> acc+curravl,5)
console.log(b);


const shoppingCart=[

    {
      itemName:"js",
      price:3000
    },
    
    {
        itemName:"js",
        price:3000
    },
    {
        itemName:"py",
        price:3000
    },  
    {
        itemName:"data sciene",
        price:3000
    },
]

const c=shoppingCart.reduce((acc,item)=>  acc+item.price,0)
console.log(c);

