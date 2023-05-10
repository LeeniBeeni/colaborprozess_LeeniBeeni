

let slider = document.querySelector('.my-slider')


function setup(){
  // setup of the sketch
  let canvas = createCanvas(innerWidth, innerHeight);
  // put canvas inside div id "p5"
  canvas.parent('#p5')
  //background(192, 0, 255);
  rectMode(TOP);
  frameRate(120);
}

// option + shift + f = format your code
function draw(){
  console.log(slider.value)
  let rand = random(-10, 10)
  let sinus = sin(frameCount / 10)
  let sinus2 = sin (frameCount / 50)
  let n = noise(sinus, sinus2)


  // background (r, g, b)
  //background(192, 0, 255);
  // here you draw to the screen
//fill(random(0,255),random(0,255),random(0,255));
  stroke(0, 0, 0)



  // mouseX and mouseY are the coordinates
  let x = mouseX;
  let y = mouseY;
  ellipse(x, y, 100, slider.value)
  


 for (let i = 0; i < 10; i++) {
  stroke(10, 20, 20, 50)

  let pos_x = (x + (i * 50)) + sinus2 * (5 * i);
  let pos_y = y + sinus * (5 * i);

  //let pos_x = (x + (i * 50));
  //let pos_y = y + n * 60;
  
}
}


