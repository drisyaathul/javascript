//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let numb = prompt("Enter the Number")
console.log(number);

if (numb == 1) {
    console.log("Unit");
}else if (numb == 10){
    console.log("ten");
}else if (numb == 100){
    console.log("Hundred");
}else if (numb == 1000){
    console.log("Thousand");
}else{
    console.log("Invalid");
}