function display1() {
    console.log("Hello TypeScript!");
}

display1(); //Output: Hello TypeScript 



function Sum(x: number, y: number) : number {
    return x + y;
}

Sum(2,3); // returns 5


let greeting = function() {
    console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript! 


let Sum1 = function(x: number, y: number) : number
{
    return x + y;
}

Sum1(2,3); // returns 5

/**
 * Optional Arguments
 * @param greeting 
 * @param name 
 * @returns 
 */

function Greet1(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet1('Hello','Steve');//OK, returns "Hello Steve!"
Greet1('Hi'); // OK, returns "Hi undefined!".
Greet1('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.


/**
 * Default Arguments
 */
function Greet2(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet2('Steve');//OK, returns "Hello Steve!"
Greet2('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet2('Bill'); //OK, returns "Hello Bill!"




