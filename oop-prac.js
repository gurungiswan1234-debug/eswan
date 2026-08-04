// Suppose a developer earns annually an amount of Npr. 35,00,000
// Calculate eyearly tax payable and net salary after deducting tax. 
// The tax calculation should be based on the following slabs: 
// for an annual income of about 1000000: 1% of total income 
// for next 500000 => 10%
// for next 500000 => 20% 
// for next 1000000 => 25% 
// for any above the provided range => 29% of any 

class employee{
    salary; 
    netSalary;
    #tax; 
    constructor({_salary}){
        this.salary=_salary;
    }
getTax() {
    let salary = this.salary;
    let tax = 0;

    if (salary > 3000000) {
        tax += (salary - 3000000) * 0.29;
        salary = 3000000;
    }

    if (salary > 2000000) {
        tax += (salary - 2000000) * 0.25;
        salary = 2000000;
    }

    if (salary > 1500000) {
        tax += (salary - 1500000) * 0.20;
        salary = 1500000;
    }

    if (salary > 1000000) {
        tax += (salary - 1000000) * 0.10;
        salary = 1000000;
    }

    if (salary > 0) {
        tax += salary * 0.01;
    }

    this.#tax = tax;
    return this.#tax;
}
    getNetSalary(){
        this.netSalary=this.salary-this.#tax;
    }


    printSalary(){
        this.getTax()
        this.getNetSalary()
        console.log(`
            NetSalary of an employee is:Npr.${this.netSalary}
            Deducted tax amount is :Npr.${this.#tax}
            `);
    }
}
const emp=new employee({_salary:3500000})
emp.printSalary();