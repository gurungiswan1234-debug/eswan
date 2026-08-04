//timer, db querry , api call, complex algorithm
setTimeout(()=>{
    console.log("I will execute after 1 sec")
}, 1000)

let count = 10;
const timer =setInterval(()=>
    {
    const today= new Date();
    const hour = today.getUTCDate();
    const minuntes = today.getMinutes();
    const seconds = today.getSeconds();
    console.log(`${hour}:${minuntes}:${seconds}`);
    }
, 1000)
    //end interval after 10 sec

console.log("I will execute first");