//Arithmetic Operators
let a =10; 
a++
++a
console.log(a);

console.log(a++); //print, increment , assign
console.log(++a);// increment , print , assign



let abc; 
console.log(abc);
console.log(!abc);


let d=18;
console.log(d>=18? "can vote": "cannot vote");

//operatorrs
/**
 * Nullish colleashing
 *  tempelate literals
 * Object destructure
 * spread and Rest
 * optional chaining Operator
 */

let obj = {
    address: null
}
console.log(obj.address ? obj.address: "N/A");
console.log(obj.address ?? "N/A");


let url="https://broadwayinfosys.com"
let userDetail ={
    name: "Eswan", 
    address: "kathamndu",
    notification: 10
}
let emailTemplate = ` Dear ${userDetail.name}
Your address has been set to ${userDetail.address}
You have ${userDetail.notification} notifications

Please visit <a href="${url}">${url}</a>`
console.log(emailTemplate);


//Array destructure
let numbers =[1, 3, 5];
//  let a= numbers[1]
//  let b= numbers[2]
//  let c= numbers[3]
let [g, b, c]= numbers;//array destructure

//object destructure
const userProfile={
    userName:"Eswan",
    address: {
        temporary: "kathmandu",
        permanent: "nuwakot"
    },
    email:"hello123@gmail.com",
    phone:9842384289,
    role: "student"
}
let {userName, email, role:userRole, ...rest}=userProfile;//rest operator
console.log(userProfile.role);
console.log(rest)

let productInfo = {
    response : {
        price: 1000,
        discount: 10
    }
}

let {response: {price, discount}}=productInfo

const afterDiscount = price -price *discount;
console.log(afterDiscount);


//shallow copy and deep copy
//shallow---> reference copy

// const userData = userProfile;
// const userData= userProfile//temporary
// const userData= {...userProfile}//Deep copy- partial
// const userData= {...userProfile, address:{...userProfile}}//Deep copy

const userData= JSON.parse(JSON.stringify(userProfile))
console.log(userProfile)
userData.userName="Tamang";
userData.address.temporary = "Battar"
console.log(userProfile)
console.log(userData)


