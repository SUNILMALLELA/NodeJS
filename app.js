console.log("Welcome");
console.log(__dirname);
const result = require('./module');
const greet = require('./common')
console.log(greet("SUNIL"));

console.log(result.add(10,10));
console.log(result.sub(20,10));



