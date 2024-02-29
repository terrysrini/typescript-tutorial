interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string;
}

/**
 * Interface as Type
 */

// interface KeyPair {
//     key: number;
//     value: string;
// }


// let kv1: KeyPair = {key:1, value:"steve"};
// let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

// let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 


// /**
//  * Interface as Function Type
//  */

// interface KeyValueProcessor {
//     (key: number, value: string): void;
// }


// function addKeyValue(key:number, value:string): void {
//     console.log('addKeyValue: key = ' + key + ', value = ' + value)
// }

// function updateKeyValue(key: number, value:string):void { 
//     console.log('updateKeyValue: key = '+ key + ', value = ' + value)
// }


// let kvp: KeyValueProcessor = addKeyValue;
// kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

// kvp = updateKeyValue;
// kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 


// function delete1(key:number):void { 
//     console.log('Key deleted.')
// }
    
// let kvp1: KeyValueProcessor = delete1; //Compiler Error



/**
 * Implement interface
 * 
 */


// interface IEmployee1 {
//     empCode: number;
//     name: string;
//     getSalary:(empCode: number) => number;
// }

// class Employee1 implements IEmployee1 { 
//     empCode: number;
//     name: string;

//     constructor(code: number, name: string) { 
//         this.empCode = code;
//         this.name = name;
//     }

//     getSalary(empCode:number):number { 
//         return 20000;
//     }
// }

// let emp1 = new Employee1(1, "Steve");



/**
 * Extend interface
 */

interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee1 extends IPerson {
    empCode: number;
}

let empObj1:IEmployee1 = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}