//4. Write a program that takes User Inputs and does Unit Conversion of different Length units
//1. Feet to Inch 3. Inch to Feet
//2. Feet to Meter 4. Meter to Feet

let numb = prompt("Enter Number to Convert")
console.log(numb);
let option = 3;

switch(option){
    case 1:
        console.log("Feet to Inch : "+numb*12);
        break;
    case 2:
        console.log("Feet to Meter : "+numb*0.3048);
        break;
    case 3:
        console.log("Inch to Feet : "+numb/12);
        break;
    case 4:
        console.log("Meter to Feet : "+numb*3.28);
        break;
    default:
        console.log("INVALID");
        break;
}
