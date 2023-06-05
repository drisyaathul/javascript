//let ,var and const
let a = 5;
console.log(a);

let temp = 25;

if(temp > 30){
    console.log("it is hot oustside");
}else if(temp > 20) {
    console.log("warm outside");
}else{
    console.log("cool")
}

let day = "Thursday"

switch(day){
    case "monday":
        console.log("Day is Monday");
        break;
    case "Tuesday":
        console.log("Day is Tuesday");
        break;
    case "Wednesday":
        console.log("Day is Wednesday");
        break;
    case "Thursday":
        console.log("Day is Thursday");
        break;
    case "Friday":
            console.log("Day is Friday");
            break;
    case "Saturday":
            console.log("Day is Saturday"); 
            break;
    default:
        console.log("Weekend");
        break;

}
