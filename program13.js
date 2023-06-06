//Write a program that takes a input and determines if the number is a prime.

let numbr = prompt("Enter the Number");
var count = 0;

for(var i=1; i<=numbr; i++) {
    if(numbr % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log(numbr+" is a Prime Number");
}else {
    console.log(numbr+" is not a Prome Number");
}