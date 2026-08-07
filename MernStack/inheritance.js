// class User{
//     name; 
//     email;
//     address;
//     #phone;

//     constructor(name, email, address, phone ){
//         console.log("parent")
//         this.name = name;
//         this.email = email;
//         this.address = address;
//         this.#phone = phone
//     }
//     getPhone(){
//         return this.#phone
//     }

// }
// class Student extends User{
//     group;
//     stack;
//         constructor(name, email, address, phone, group, stack ){
//         super(name, email, address, phone)
//         console.log("child")
//         this.group= group;
//         this.stack= stack;

//     }
//     getPhone(){
//         console.log()
//     }
// }
// const std = new Student("Eswan", "gurungiswan1234@gmail.com", "kathmandu", 9764636316, "5-pm", "MERN STACK")
// console.log(std)

class Animal {
    constructor(name, age){
        this.name=name;
    }
    move(speed){
        console.log(`This  ${this.name} moves at the speed of ${this.speed} mph`)
    }
}
class Rabbit extends Animal{
     constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed=runSpeed;
     }    
     run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
     }
}

class Fish extends Animal{
    constructor(name, age ,swimSpeed)
    {
        super(name, age)
        this.swimSpeed= swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
     }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flyspeed)
     }
}

const rabbit = new Rabbit("rabbit", 10, 20)
const fish = new Fish("fish", 15, 20)
const hwak = new Hawk("hwak", 30, 40)

rabbit.run();

