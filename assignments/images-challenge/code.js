for (let x = 0; x < 100; x++) {
 if (x % 2 ==0){
 drawFilledCircle(x* 25, height - 250, 13, 'blue');
} else{
drawFilledCircle(x*25, height - 250, 13, 'red');
}
}



drawLine(100, 100, width, height, 'red');