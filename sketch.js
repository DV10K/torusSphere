function setup() {
	createCanvas(1920, 1080, WEBGL);
	
background(0);
	const myCamera = createCamera();
	myCamera.setPosition(500, -500, 500);
	myCamera.lookAt(0, 0, 0);
frameRate(20)
  
}


function draw() {
 
  rotateX(sin(frameCount)+random(-500,500))
  rotateY(cos(frameCount)+random(-500,500))
  rotateZ(radians(rotationY)+random(-500,500) )
	fill(random(50,200),random(50,200),random(50,200),50)
noStroke()
  translate(0,0,355)
torus(25,1)
}
function mousePressed() {
 let fs = fullscreen();
 fullscreen(!fs);
}