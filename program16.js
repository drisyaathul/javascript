//Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or 
//equal to 2^n till 256 is reached..using While loop

let n = 8;
var count = 1;

while (count<n) {
    result = Math.floor(Math.pow(2,n));
    count++;
    console.log(result);
}