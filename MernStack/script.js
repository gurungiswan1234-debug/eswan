console.log("hello world");
let a = "";
let b = 123;
let c = null;
let d = true;
//Array and object
let h = [];
//  h = ["abd"]
h = ["hello", 10, 20, "eswan"];
let i = "eswan ";
i = 20;
//tuple
// let j:[string|number|boolean] =["eswan "];
let j = ["eswan", 10, true];
//object
let k = {
    name: "Eswan",
    email: "",
    phone: 232,
    address: "Nuwakot"
};
class User {
    name = "";
    email = "";
    phone = 0;
    address = "";
    abc = "Eswan";
    def = "Tamang";
}
class UserInfo extends User {
    getUser() {
        console.log(this.abc);
    }
}
const userobj = new User();
async function addNumber(a = 0, b = 0) {
    return a + b;
}
export {};
//# sourceMappingURL=script.js.map