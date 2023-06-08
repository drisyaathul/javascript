//Extend the program to take a range of number as input and output the Prime Numbers in that range.

var minimumNumber,maximumNumber, flag = 0;
 minimumNumber = 5;
 maximumNumber = 25;

for(var value=minimumNumber; value<=maximumNumber; value++) {
    for(var i=2; i<value; i++){
        if(value % i === 0){
        flag = 1;
        break;
        }
    }
    if(flag === 0) {
        console.log(value);
    }
    flag = 0;
}
