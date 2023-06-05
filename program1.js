//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let b = Math.floor(Math.random()*999);
let c = Math.floor(Math.random()*999);
let d = Math.floor(Math.random()*999);
let e = Math.floor(Math.random()*999);
let f = Math.floor(Math.random()*999);
console.log("You Entered : "+b+" , "+c+" , "+d+" , "+e+" , "+f);
//Maximum Value
if(b>c && b>d && b>e && b>f) {
    console.log("Maximum value is : "+b);
}else if(c>d && c>e && c>f) {
    console.log("Maximum value is : "+c);
}else if(d>e && d>f) {
    console.log("Maximum value is : "+d);
}else if(e>f) {
    console.log("Maximum value is : "+e);
}else {
    console.log("Maximum value is : "+f);
}
//Minimum Value
if(b<c && b<d && b<e && b<f) {
    console.log("Minimum value is : "+b);
}else if(c<d && c<e && c<f) {
    console.log("Minimum value is : "+c);
}else if(d<e && d<f) {
    console.log("Minimum value is : "+d);
}else if(e<f) {
    console.log("Minimum value is : "+e);
}else {
    console.log("Minimum value is : "+f);
}