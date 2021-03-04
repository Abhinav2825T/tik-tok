function setup() {
  createCanvas(800,400);
  //calculating time using predefined func from p5.js
  hr=hour();
  mn=miniute();
  sc=second();
}

function draw() {
  background(255,255,255);
  scAngle = map(sc,0,60,0)
  hrAngle = map(hr,0,60,0)  
  mnAngle = map(mn,0,60,0) 
  
  stroke(255,0,0)
  strokeWeught(7)
  Line(0,0,100,0)

//drawing seconds hand
Push();
rotate(scAngle);//rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

Push();
rotate(hrAngle);//rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

Push();
rotate(mnAngle);//rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

  drawSprites();
}