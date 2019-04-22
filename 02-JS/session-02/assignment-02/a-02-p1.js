/* 1. Different scoping techniques */

let k = "I am ken.";
var kv = "I'm not ken.";

if(true){ // if
    let a = "I am albert.";
    var av = "I'm not albert.";
}
//console.log(a);// WILL BE DEFINED with var, but not let
console.log(k);
console.log(av);// WILL BE DEFINED with var, but not let
console.log(kv);

//let i = 0;
let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
//console.log(i); //let will be block scoped. Var is not.
console.log(text);

let ilet = 0;
function newfunc(ilet){ // if ilet is not passed in as an argument, ilet becomes 5.
    ilet = 5; 
    //return ilet;
}
newfunc();
console.log(ilet);
// console.log(hiding); // will hoist with var, but not let
// let hiding = "haha"; 

console.log(a); // hoisting
console.log(b);  // hoisting
var a = "memem";
var b = "hmmm";
b = a;
a = "heehee";
console.log(a); // also types not copied by reference, only objects seems like.
console.log(b);