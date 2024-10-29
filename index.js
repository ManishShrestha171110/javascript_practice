
var a = 10;
var b = 5;

var sum = a + b;             
var difference = a - b;     
var product = a * b;         
var quotient = a / b;       
var remainder = a % b;       

console.log("Arithmetic Operations:");
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);


var x = 20;        
x += 10;          
x -= 5;           
console.log("\nAssignment Operations:");
console.log("Updated x: " + x);

var isEqual = (a === b);         
var isNotEqual = (a !== b);     
var isGreater = (a > b);         
var isLess = (a < b);            

console.log("\nComparison Operations:");
console.log("a is equal to b: " + isEqual);
console.log("a is not equal to b: " + isNotEqual);
console.log("a is greater than b: " + isGreater);
console.log("a is less than b: " + isLess);


var condition1 = true;
var condition2 = false;

var andCondition = condition1 && condition2;  
var orCondition = condition1 || condition2;   
var notCondition = !condition1;            

console.log("\nLogical Operations:");
console.log("AND Condition: " + andCondition);
console.log("OR Condition: " + orCondition);
console.log("NOT Condition: " + notCondition);