//Write a program that computes a factorial of a number taken as input. 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

let numbr = 5;
var reslt = 1;
for(var i=1; i<=numbr; i++) {
    reslt = reslt*i;
}
console.log("Factorial of 5 is "+reslt);
