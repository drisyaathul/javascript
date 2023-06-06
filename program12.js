//Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

let n = 2;
let power = prompt("Enter the Limit ")
console.log(n);
var result = 1;

for(var i=1; i<=power; i++) {
    result = n*result;
}
console.log(result);

    
