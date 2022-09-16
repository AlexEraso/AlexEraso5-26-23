var NUM_CIRCLES = 15;
var CenterX = getWidth() / 2;
var CenterY = getHeight() / 2 ;
var radius = getWidth() / NUM_CIRCLES / 2;

function start(){
    for(var i =0; i < NUM_CIRCLES; i++){
        var circle = new Circle(radius);
        circle.setPosition(radius * i * 2 + radius,CenterY);
        add(circle);
    }
}