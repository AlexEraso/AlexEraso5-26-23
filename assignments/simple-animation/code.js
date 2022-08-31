// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
  clear();


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

  drawFilledRect(-10, height - 200, 900, 300, 'green');

drawFilledRect(-10, height - 600, 1400, 400, 'lightblue');

drawFilledCircle(width - 475, height - 575, 50, 'yellow');



drawFilledRect(110, height - 375, 300, 225, 'grey');

drawFilledRect(225, height - 260, 75, 115, 'brown');

drawFilledCircle(width - 210, height - 190, 5, 'white');
  drawFilledCircle((time / 1.9) % width, height / 1.2, 15, 'white');
  drawFilledCircle((time / 2) % width, height / 1.2, 15, 'blue');
    drawFilledCircle((time / 2.1) % width, height / 1.2, 15, 'red');


  drawFallingFilledTriangle(width / 2, time);
};

// This is a function that we define to make it easier to draw a triangle. You
// may want to experiment with writing your own functions using this one as a
// model to draw other shapes.
const drawFilledTriangle = (x1, y1, x2, y2, x3, y3, color, width = 1) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);
};

// This draws a falling trangle of a particular shape whose bottom point is
// positioned at x and whose y is a function of time.
const drawFallingFilledTriangle = (x, time) => {
  // Figure out the x values relative to the passed in x
  let x1 = x - 75;
  let x2 = x;
  let x3 = x + 25;

  // Figure out the y values as a function of time.
  let y1 = (time / 50) % height;
  let y2 = y1 + 75;
  let y3 = y1 - 23;

  // Actually draw the triangle.
  drawFilledTriangle(x1, y1, x2, y2, x3, y3, 'orange', 3);



};

// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);
