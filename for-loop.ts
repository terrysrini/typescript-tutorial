for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }


  //for...of Loop
  let arr2 = [10, 20, 30, 40];

  for (var val of arr2) {
    console.log(val); // prints values: 10, 20, 30, 40
  }


let arr3 = [10, 20, 30, 40];

for (var index in arr3) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}