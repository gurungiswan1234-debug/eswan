let allProducts=[
    {ProductName:"iphone10", Price:20000, discount:10},
    {ProductName:"samsung", Price:30000, discount:10},
    {ProductName:"sony", Price:40000, discount:10}
]

allProducts.forEach((val)=>{
    val.discountPrice=(val.Price *val.discount)/100;
    val.afterDiscount=val.Price-val.discountPrice;

})
let result=allProducts.map((val)=>{
    val.discountPrice=(val.Price *val.discount)/100;
    val.afterDiscount=val.Price-val.discountPrice;
    return val;
})
console.log(allProducts);
console.log(result)


// let listOfNumber=[123, 345, 432, 234, 176, 654, 453, 543]

// let output =listOfNumber.reduce((max, curr)=>{
//    return (max<curr)?curr :max;
// })
// console.log(output);

let listOfNumber=[123, 345, 432, 234, 176, 654, 453, 543]

let output =listOfNumber.reduce((max, curr)=> (max<curr)?curr :max)
console.log(output);

let evenNumb=[1, 2, 3, 4 , 5, 6, 7, 8 , 9 , 10];

let outeven =evenNumb.filter((val)=>val % 2== 0);
console.log(outeven);