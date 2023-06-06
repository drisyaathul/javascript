//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum

let a = 3;
let b = 6;
let c = 2;
//1. a+b*c
let value1 = a+b*c;
console.log(value1);
//2. a%b+c
let value2 = a%b+c;
console.log(value2);
//3. c+a/b
let value3 = c+a/b;
console.log(value3);
//4. a*b+c
let value4 = a*b+c;
console.log(value4);

if (value1>value2 && value1>value3 && value1>value4 ){
    console.log(value1+" is maximum");
}else if(value2>value3 && value2>value4) {
    console.log(value2+" is maximum");
}else if(value3>value4){
    console.log(value3+" is maximum");
}else{
    console.log(value4+" is maximum");
}

if (value1<value2 && value1<value3 && value1<value4 ){
    console.log(value1+" is minimum");
}else if(value2<value3 && value2<value4) {
    console.log(value2+" is minimum");
}else if(value3<value4){
    console.log(value3+" is minimum");
}else{
    console.log(value4+" is minimum");
}


