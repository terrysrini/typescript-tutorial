var kv1 = { key: 1, value: "steve" };
var kv2 = { key: 1, val: "Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
var kv3 = { key: 1, value: 100 }; // Compiler Error: 
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
var kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
// function delete1(key:number):void { 
//     console.log('Key deleted.')
// }
// let kvp1: KeyValueProcessor = delete1; //Compiler Error
