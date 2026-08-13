## This is place where we write important notes...
| Type                 | Example                    |
| -------------------- | -------------------------- |
| Function Declaration | `function add(){}`         |
| Function Expression  | `const add = function(){}` |
| Arrow Function       | `const add = () => {}`     |
| Anonymous Function   | `function(){}`             |
| Callback Function    | `greet(hello)`             |

## use case of .map, .reduce , .filter....

| Loop/Method  | Works On                    | Returns      | Common Use                   |
| ------------ | --------------------------- | ------------ | ---------------------------- |
| `for`        | Arrays, numbers             | Nothing      | Need index or full control   |
| `for...of`   | Arrays, strings, Sets, Maps | Nothing      | Iterate over values          |
| `for...in`   | Objects                     | Nothing      | Iterate over object keys     |
| `while`      | Any                         | Nothing      | Unknown number of iterations |
| `do...while` | Any                         | Nothing      | Must run at least once       |
| `map()`      | Arrays                      | New array    | Transform data               |
| `forEach()`  | Arrays                      | `undefined`  | Perform actions like logging |
| `filter()`   | Arrays                      | New array    | Keep matching items          |
| `reduce()`   | Arrays                      | Single value | Aggregate data               |




** Asynchronous and synchronous behaviour of javascript
 //timer, db query, complecx logical , api call
```js
console.log("Start");

console.log("Learning JavaScript");

console.log("End");

          output  
Start
Learning JavaScript
End

console.log("Start");

setTimeout(() => {
    console.log("Learning JavaScript");
}, 2000);

console.log("End");

        output
Start
End
Learning JavaScript
```

## Without Async(sync)
Download File (20 seconds)
↓
Everything waits...
↓
User cannot interact

*** Real Life Example:
## sync
    ** You Oder pizza
    ** Order Received
    ** You stay in queee
    ** You receive pizza
    ** You returned back home




## With Async
Download starts
↓
User can continue clicking buttons
↓
Download finishes later

*** Real Life Example
    ** You gave Pizza Order
    ** Order Receive
    ** You Went shopping or wander around
    ** Order Ready
    ** You comeback and receive it


 ## es-6 and es-5 (import and export syntax)