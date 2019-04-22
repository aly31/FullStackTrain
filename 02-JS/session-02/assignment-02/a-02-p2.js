/* 2. explore ... operator 
and see the different methods of declaring a variable 
using ... operator (spread)?*/

var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];

// ["one", "two", "three", "four", "five"]

var arr3 = [1,2,3];
var arr4 = [...arr3]; // like arr.slice()
arr4.push(4)


function myFn(...arr3) {
    return arr3[0] + arr3[1];
}

console.log(myFn(arr3));

let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1


// below is destructuring.
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }