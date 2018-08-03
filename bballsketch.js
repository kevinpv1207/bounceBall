let x = 250, y = 250;
let w = 150, h = 150;
let velocityX = 3;
let velocityY = 9;
let accelerationY = 9.8/60;
let colorR = 255;
let colorG = 255;
let colorB = 255;
let size = 50;
function setup() {
createCanvas(500,500);
background(5);

}
function draw() {
background('blue');
ellipse(x,y,size);
ellipse(w,h,size);
 x += velocityX;
 if (x >= width-(size/2) || x <= (size/2)) {
    velocityX *= -1.1;
    fill(random() * 255, random() * 255, random() * 255);
}
 velocityY += accelerationY;
y += velocityY;

if (y >= width-(size/2) || y <= (size/2)) {
    velocityY *= -1.1;
    fill(random() * 255, random() * 255, random() * 255);
} if (y > width-(size/2) && abs(velocityY) <= 0.5 /*y < (size/2)*/ ) {
     velocityY = 0;
    accelerationY = 0;
    fill(random() * 255, random() * 255, random() * 255);
}
}
function mouseClicked() {
 if(dist(mouseX,mouseY,x,y) <= size/2) {      colorG = Math.floor(Math.random()*256);
     colorB = Math.floor(Math.random()*256);
 }
}