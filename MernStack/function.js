//Recurisve funtion

function PrintNumb(n, i=1){
console.log(i);
i++
if(i<=10)
{
PrintNumb(n, i)
}
}

PrintNumb(10)

//clouser function
const bodyValidator =(arg)=>{

    return ()=>{
        console.log(arg);
    }

}
const validator = bodyValidator();
validator()