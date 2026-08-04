// prototype based and class based
// prototype
/**
 * a. Abstraction 
 *  - Every business logic or dirty codes are hidden inside the class and 
 *    objects will be accessing the properties of the class unknown about the data or value stored
 * b. Encapsulation 
 *  - Every peroperties or methods in a class can have their own visibility level 
 *  - Public, private, protected(not in js)
 * c. Inheritance 
 *  - To acheive the reusability of the codes by different data structures, then the inheritance will bring out the reusability features 
 * d. Polymorphism
 *  - Sometimes a same function might have to work differently when accessing via different classes or properties 
 */

// const promp = new Promise()
const today = new Date()
// 2026-08-03T12:00:00Z

// Product 
class ProductInfo {
  // by default everything of a class has public access
  // properties / varibles or constants
  // any variable container # is a private property

  name = "";
  category = "";
  #price;
  #discount;
  #discountAmount;
  #afterDiscount;
  _brand;
  _description;
  // methods/functions

  // constructor(prodInfo) {
  // {name: "Product Name", price: 12345, discount: 10, brand: "test", category: "Prod Category"}
  constructor({name, price, discount, brand, category, description=""}) {
    // always executes when an object is created
    // never make the constructor async
    // never make constructor as arrow function
    // never return anything from constructor
    // return this;
    this.name = name; 
    this.#price = price 
    this.#discount = discount
    this._brand = brand
    this.category = category
    this._description =description
  }

  // setPrice(_price) {
  //   this.#price = _price;
  // }

  // setDiscount(_dis) {
  //   this.#discount = _dis;
  // }

  //general
  
  getProductDiscount() {
    this.#discountAmount = (this.#price * this.#discount) / 100;
    return this.#discountAmount;
  }

  // arrow function
  getAfterDiscountPrice = () => {};
}

const prodInfo = new ProductInfo({name: "Product Name", price: 12345, discount: 10, brand: "test", category: "Prod Category"})

// prodInfo.setPrice(100000)
// prodInfo.setDiscount(10)
// prodInfo.name = "iphone 12"
// prodInfo.category = "Smart Phones"
// prodInfo._brand = "apple"
// prodInfo._description = ``

console.log(prodInfo.getProductDiscount)



// console.log(prodInfo)     // ProductInfo {}


// Develop a class called Student with name and score in number. Score should be less than 500
// Assign division and percentage if total is 500 and calculation is based on the following: 
// if percentage >= 80 => Distinction
// percentage >= 60 but < 80 => First Division
// percentage >= 45 but < 60 => Second Division
// percentage >= 32 but < 45 => Third Division
// percentage < 32  => Sorry! You are failed!!!!

class Student {
  name; 
  score; 
  #percentage; 
  #division; 

  constructor({name, score}) {
    this.name = name;
    this.score = score;
  }

  #getPercentage() {
    this.#percentage = this.score /  5;
  }

  #getDivision() {
    if (this.#percentage >= 80) {
      this.#division = "Distinction";
    } else if (this.#division >= 60) {
      this.#division = "First Division";
    } else if (this.#division >= 45) {
      this.#division = "Second Division";
    } else if (this.#division >= 32) {
      this.#division = "Third Division";
    } else {
      this.#division = "Sorry! You are failed"
    }
  }

  printProfile() {
    this.#getPercentage()
    this.#getDivision()

    console.log(`
      Your Name: ${this.name}
      Your total score: ${this.score}
      Your Percentage: ${this.#percentage}%
      Your Divison: ${this.#division}
    `)
  }
}

const std = new Student({name: "Student One", score: 400})
std.printProfile()


// Suppose a developer earns annually an amount of Npr. 35,00,000
// Calculate eyearly tax payable and net salary after deducting tax. 
// The tax calculation should be based on the following slabs: 
// for an annual income of about 1000000: 1% of total income 
// for next 500000 => 10%
// for next 500000 => 20% 
// for next 1000000 => 25% 
// for any above the provided range => 29% of any 