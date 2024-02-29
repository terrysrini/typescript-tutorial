/**
 * Advantage of Let over var
 * 
 */

console.log(num1); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
let num1:number = 10 ;

console.log(num2); // OK, Output: undefined 
var num2:number = 10 ;



var num:number = 1; // OK
var Num:number = 2;// OK
var NUM:number = 3;// OK
var NuM:number = 4;// OK

let num:number = 5;// Compiler Error: Cannot redeclared block-scoped variable 'num'
let Num:number = 6;// Compiler Error: Cannot redeclared block-scoped variable 'Num'
let NUM:number = 7;// Compiler Error: Cannot redeclared block-scoped variable 'NUM'
let NuM:number = 8;// Compiler Error: Cannot redeclared block-scoped variable 'NuM'




/**
 * Example: Same Variable Name in Different Blocks Copy
 */


// let num:number = 1; 

// function demo() {
//     let num:number = 2;

//     if(true) { 
//         let num:number = 3;
//         console.log(num); //Output: 3
//     }

//     console.log(num);//Output: 2
// }
// console.log(num); //Output: 1
// demo();



// Const




// const num:number = 100;
// num = 200; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property





// /**
//  * Error when the argument and varaible names are same
//  * @param a 
//  * @returns 
//  */

// function letDemo(a: number ) { 
//     let a:number = 10 ; //Compiler Error: TS2300: Duplicate identifier 'a'
//     let b:number = 20 ; 

//     return a + b ;
// }







// const playerCodes = { 
//     player1 : 9, 
//     player2 : 10, 
//     player3 : 13, 
//     player4 : 20
// }; 
// playerCodes.player2 = 11; // OK

// playerCodes = {     //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
//     player1 : 50,   // Modified value
//     player2 : 10, 
//     player3 : 13, 
//     player4 : 20
// }; 



// const playerCodes = { 
//     player1: 9, 
//     player2: 10, 
//     player3: 13, 
//     player4: 20
// }; 

// playerCodes = { //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
//     player1: 9, 
//     player2: 10, 
//     player3: 13, 
//     player4: 20, 
//     player5: 22
// }; 

