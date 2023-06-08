//Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let head = 0;
let tail = 0;
while (head != 11 && tail != 11) {
    let coin = Math.floor(Math.random()*2);
    if(coin == 1) {
        head++;
    }else {
        tail++;
    }
}
if (head > tail) {
    console.log("Head wins ");
}else {
    console.log("Tail wins ");
}