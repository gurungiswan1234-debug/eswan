console.log("hello world")

let a: string =""
let b: number = 123
let c: null =null
let d: boolean= true

//Array and object

let h: Array<string | number> =[]
//  h = ["abd"]
h = ["hello", 10 , 20 , "eswan"]

let i: string | number = "eswan "
i = 20 ;


//tuple
// let j:[string|number|boolean] =["eswan "];
let j: [string, number, boolean] = ["eswan", 10, true];

interface IUser{
    name:string, 
    email:string,
    phone:number |string,
    address: string
}

//object
let k: IUser = {
    name: "Eswan", 
    email:"",
    phone: 232,
    address: "Nuwakot"
}

class User implements IUser {
    name: string = ""
    email: string = "";
    phone: number = 0;
    address: string = "";
    protected abc:string="Eswan";
    private def: string= "Tamang";
}

class UserInfo extends User{
    getUser()
    {
    console.log(this.abc)
    }
}

const userobj: IUser = new User();

async function addNumber(a:number = 0, b:number=0):Promise<number>{
    return a + b
}

const SumNumber = <T>(a:T, b:T): T=>{
    return a+b;
}

// SumNumber<number>(10, 30)
SumNumber<string>("10", "30")

const Obj:Record<string, string|Record<string, string|Record<string, string>>> = {
    key1: "",
    key2: "",
        key3:{
            key31: "",
            key32:" ",
                key4: {
                    key41:" ",
                    key42:" "
                }
        }

}