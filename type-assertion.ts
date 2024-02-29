
let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number




let employee1 = { };
employee1.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee1.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'


interface Employee { 
    name: string; 
    code: number; 
} 

let employeedata = <Employee> { }; 
employeedata.name = "John"; // OK
employeedata.code = 123; // OK


let code1: any = 123; 
let employeeCode1 = <number> code; 



let code2: any = 123; 
let employeeCode2 = code as number;