let img;
let pixels;

function preload() {
  img = loadImage("libraries/IMG/IMG_3024.JPG");
}

function setup() {
  createCanvas(400, 400);
  pixelDensity(3);
  img.resize(400, 400); 
}


function draw(){
 background (220);
 //image(img, 20, 20)
 img.loadPixels();

for(let i =0<img.pixels.length/2;i<img.pixels.length; i=i+3){
img.pixels[i]=random(255);
}
img.updatePixels();

image(img, 0, 0);

}