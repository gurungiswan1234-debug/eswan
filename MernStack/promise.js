//Promise
const myPromise = new Promise((res, exp)=>{
    let success=true;
    if(success)
    {
        res("I m success");
    }
    else{
        exp("I m exception")
    }
})
// console.log(myPromise)
myPromise
.then((data)=>{
    console.log(data)
})
.catch((exception)=>
    {
    console.log(exception)
})



const func1=async(res, rej)=>{
// return "I m promise". //resolve
throw "I m rejected promise"//throw rejection
}
const result = func1()
console.log(result)
