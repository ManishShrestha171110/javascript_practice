/* Creating variable and doing the following tasks:
1. Finding length of the variable
2. Changing to upper case
3. Extacting the first three letters */

var myName="Manish";

var nameLength=myName.length;
console.log("Length of the given string= ", nameLength);

var upperCase=myName.toUpperCase();
console.log("My name in upper case= ",upperCase);

var firstThreeLetters=myName.substring(0,3);
console.log("First three letters of My Name: ",firstThreeLetters);
