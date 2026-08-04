const fruits = ["Apple", "Banana", "Mango", "Orange"];
for(let product of fruits){
    console.log(product)
    break;
}
const prices = [100, 250, 400, 150, 600];
let total=0;
for( let sum of prices)
{

    total += sum;
}
console.log(total);
const numbers = [10, 45, 70, 22, 90, 55];
let highest=numbers[0];
for(max of numbers)
{
    if(max>=50)
    {
        console.log(max)
    }
}

// const letters = ["a", "b", "e", "k", "i", "o", "u", "z", "u"];
// let c=0;
// for( count of letters)
// {
//     if(count === "a"||count === "e"||count === "i"||count === "o"||count === "u")
//     {
//         c++
//     }
// }
// console.log(c);

const letters = ["a", "b", "e", "k", "i", "o", "u", "z", "u"];
 const result =letters.filter((letter)=>{
return "aeiou".includes(letter)
 })
    
console.log(result.length)

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
};

for (let index in car)
{
    console.log(`${index}: ${car[index]}`);
}

const user = {
    name: "Ram",
    age: 21,
    country: "Nepal",
    active: true
};

for( let key in user)
{
    if(typeof(user[key]) ==="string")
    {
        console.log(user[key])
    }
}


const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 }
];

// Total card Price

const sum = cart.reduce((initial ,  item )=>{
    return initial + item.price;
}, 0)

console.log("Total Price: " + sum);

const fruits = ["Apple", "Banana", "Apple", "Orange", "Apple"];

const count = fruits.reduce((result, fruit)=>{
    result[fruit]=(result[fruit] || 0) +1; 
    return result;
}, {})