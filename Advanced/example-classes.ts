class Employee1 {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}
let emp2 = new Employee(100,"Steve");






/**
 * Inheritance
 */

// class Person {
//     name: string;
    
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Employee2 extends Person {
//     empCode: number;
    
//     constructor(empcode: number, name:string) {
//         super(name);
//         this.empCode = empcode;
//     }
    
//     displayName():void {
//         console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
//     }
// }

// let emp3 = new Employee2(100, "Bill");
// emp3.displayName(); // Name = Bill, Employee Code = 100



/**
 * Implement Interface
 * 
 */


// interface IPerson {
//     name: string;
//     display():void;
// }

// interface IEmployee {
//     empCode: number;
// }

// class Employee4 implements IPerson, IEmployee {
//     empCode: number;
//     name: string;
    
//     constructor(empcode: number, name:string) {
//         this.empCode = empcode;
//         this.name = name;
//     }
    
//     display(): void {
//         console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
//     }
// }

// let per:IPerson = new Employee(100, "Bill");
// per.display(); // Name = Bill, Employee Code = 100

// let emp:IEmployee = new Employee(100, "Bill");
// emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'



/**
 * Interface extends class
 */


// class Person {
//     name: string;
// }

// interface IEmployee extends Person { 
//     empCode: number;
// }

// let emp: IEmployee = { empCode  : 1, name:"James Bond" }