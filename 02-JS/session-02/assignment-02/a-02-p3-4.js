/* 
3) declare an object and loop through it and 
print all its key and value properties 

4) declare an array and loop through it and 
find the length of the array and 
read through all the values of array? */

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
};
  
const keys = Object.keys(fruits);

const values = Object.values(fruits);

const entries = Object.entries(fruits); // makes an array or arrays(key val pair)

for (const key of keys) {
    console.log(key);
}

// OR you can do

for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`);
}