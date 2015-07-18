//......B A C T E R I U M  O N L I N E......\\
/*
This is the first iteration of Bacterium, written, maintained, and 
owned by Gary Wilson.
*/


var bubbles = [];
var bubblesNumber = 250;
var amount;
var teria;
var sine = 10;
var increment = 5;
var xPlay = 0.2;
var isPlaying = false;


// S E T U P

function setup() {
	var sizeY = 550;
	var sizeX = sizeY + (3 * (sizeY / 4));
	createCanvas(500, 500);

	smooth();
	//background(200);


	for (var iBubble = 0; iBubble < bubblesNumber; iBubble++) {
		bubbles.push(new Bubble());

		teria = new Bacteria();
	}


}


// D R A W

function draw() {

	background(255);
		push();
		noStroke();
		translate(width/2, height/2);
	fill(0);

	ellipse(0, 0, width, height);
	
	pop();
	push();
	fill(0);
	ellipse(55, 55, 30, 30);

	//ellipse(width-40, height-40, 60, 60);
	pop();

	push();
	translate(width / 2, height / 2);
	var zoom = map(sine, 0, width, 0.1, 4.5);
	scale(zoom);

	for (var iBubble = 0; iBubble < bubbles.length; iBubble++) {
		bubbles[iBubble].movement();
		bubbles[iBubble].display();
	}

	teria.movement();
	teria.display();
	pop();
	
	push();
	noStroke();
	fill(0, 200);
	ellipse(55, 55, 30, 30);
	//ellipse(width-40, height-40, 60, 60);
	pop();





	
	controlBar();
	written();
	infoButton();
	sineZoom();
	


	

	

	




	if (keyIsPressed) {
		if (infoPress === false) {
			xMovement = 0.5;
			if (key == 'e' || key == 'E') {
				xControl += xMovement;

			} else if (key == 'q' || key == 'Q') {
				xControl -= xMovement;

			}

			if (key == 'w' || key == 'W') {
				sine += increment;

			} else if (key == 's' || key == 'S') {

				sine -= increment;
			}
		}
	}
}


// MOUSE AND KEYCONTROL


var xControl = 143;
var sine = 100;
var dia = 1;

// mouse control

function mouseControl() {

	// Control Bar
	if (infoPress === false) {
		if (mouseY < height / 1.12 && mouseY > height / 1.2 && mouseX > width / 3.5 && mouseX < width / 1.4) {
			if (mouseIsPressed) {
				xControl = mouseX;

				if (mouseX > width / 1.4) {
					xControl = width / 1.4;
				} else if (mouseX < width / 3.5) {
					xControl = width / 3.5;
				}

			}
		}
	}
}

// Control Bar
function mouseClicked() {
	if (mouseX > 35 && mouseX < 73 && mouseY > 35 && mouseY < 72) {
		infoPress = !infoPress;
	}

}

//Key control

function keyReleased() {
	if (key == 'c' || key == 'C') {
		controlPress = !controlPress;
	}
	if (key == 'p' || key == 'P') {
		infoPress = !infoPress;

	}
	
	

	if (infoPress === true) {
		isPlaying = false;
	}
}


function keyPressed() {
	if (infoPress === false) {

		if (key == 'R' || key == 'r') {
			isPlaying = !isPlaying;
		}
	}
}


// Sine Control

function sineZoom() {
	if(sine < -7) {
		sine = -7;
	}
	if (sine < 1) {
		
		increment = 0.9;
	}

	if (sine > 1) {
		increment = 1;
	}
	if (sine > 10) {
		increment = 2;
	}
	if (sine > 20) {
		increment = 3;
	}
	if (sine > 30) {
		increment = 4;
	}
	if (sine > 40) {
		increment = 5;
	}
	if (sine > 50) {
		increment = 6;
	}
	if (sine > 60) {
		increment = 7;
	}
	if (sine > 70) {
		increment = 8;
	}
	if (sine > 100) {
		increment = 10;
	}
	if (sine > 800) {
		increment = 10;
	}
	if (sine > 1000) {
		increment = 30;
	}
	if (sine > 2000) {
		increment = 50;
	}
	if (sine > 10000) {
		increment = 100;
	}
	if (sine > 20000) {
		increment = 200;
	}
	if (sine > 40000) {
		increment = 500;
	}







}



//......C O N T R O L L E R......\\

var controlPress = false;

// Controls
function controlBar() {
	if(controlPress === true) {
	noStroke();

	//Bar below text
	push();
	rectMode(CENTER);
	translate(width / 2, height / 1.107);
	fill(0, 180);
	rect(0, 0, width / 1.9, 26, 5);
	pop();

	// Control Bar
	push();
	translate(width / 2, (height / 2.5) + (height / 2.15))
	noStroke();
	fill(255, 100);
	ellipse(0, 0, width / 2, 3);
	pop();


	// Bar Controller
	push();
	rectMode(CENTER);
	translate(0, (height / 2.5) + (height / 2.15))
	fill(255, 200);
	rect(xControl, 0, 5, 17, 9);
	pop();
	}


	if (isPlaying === true) {
		xControl += xPlay;
		amount = 0.02;
	} else if (isPlaying === false) {
		xControl = xControl;
		amount = 0.2;
	}

	mouseControl();
	xCont();
	}


function xCont() {
	if (xControl < width / 3.5) {
		xControl = width / 1.4;
	} else if (xControl > width / 1.4) {
		xControl = width / 3.5;
	} else {
		xControl = xControl;
	}
}




//......V I S I B L E  T E X T......\\


// Text
function written() {


	//Control Bar Text
	push();
	fill(255);
	translate(-25, height / 1.109);
	textAlign(LEFT);
	textSize(height / 70);
		if(controlPress == true) {
	text("B  A  C  T  E  R  I  U  M", width / 3.4, 0); // Title
	text("Control: " + int(xControl - 143), width / 1.415, 0); // Control
	text("Zoom: " + int(sine+8), width / 1.621, 0); // Zoom
	text("Density: " + int(dia - 2), width / 1.915, 0); // Density
		}
	
		
	pop();
	
	push();
	textSize(10);
	textAlign(CENTER);
	strokeWeight(1);
	fill(255, 200);
	//text(int(sine), width-40, height-35);
	pop();



}

//......I N F O R M A T I O N......\\

var infoPress = false;
var alphaBegin = 200;
var alphaIncre = 3;


function infoButton() {


	//Button
	rectMode(CENTER);

	strokeWeight(0);
	stroke(255);
	noFill();
	rect(30, 30, 20, 20, 5);
	//Button text
	textSize(height / 35);
	textAlign(CENTER);
	noStroke();
	fill(255, 200);


	if (infoPress === true) {
		text("X", 57, 60);
		infoBox();
	} else if (infoPress === false) {
		text("?", 57, 60);
	}



}

//Information Box

function infoBox() {

	//Box
	rectMode(CENTER);
	stroke(255, 100);
	fill(0, 200);
	ellipse(width / 2, height / 2, width/1.4, height /1.4);

	// Text
	noStroke();
	fill(255, 200);

	// Welcome
	textSize(height / 40);
	textAlign(CENTER);
	text("B  A  C  T  E  R  I  U  M", width / 2, height / 4);



	textSize(height / 60);
	textAlign(CENTER);
	// Information
	push();
	translate(width / 2, height / 3.3);
	text("B A C T E R I U M  is a simple interactive visual design", 0, -10);
	text("project, created by Gary Wilson. This is the first iteration, in", 0, 0);
	text("which the user may manipulate the density and geometry", 0, 10)
	text("of a microorganism.", 0, 20)
	pop();

	// Control
	push();
	translate((width / 2 + 5), (height / 3-20));
	textFont("Helvetica");
	text("A", -65, 50);
	text("Increase Density", 20, 50);
	text("D", -65, 70);
	text("Decrease Density", 20, 70);
	text("W", -65, 90);
	text("Zoom In", 20, 90);
	text("S", -65, 110);
	text("Zoom Out", 20, 110);
	text("Q", -65, 130);
	text("Rotation Control Reverse", 20, 130);
	text("E", -65, 150);
	text("Rotation Control Forward", 20, 150);
	text("R", -65, 170);
	text("Auto-Run Forward Rotation", 20, 170);
	

	text("P", -65, 190);
	textFont("Helvetica");
	text("Pause", 20, 190);
	text("C", -65, 210);
	text("Control Bar Toggle", 20, 210);
	pop();

	textAlign(CENTER);
	textSize(height / 60);
	fill(255, alphaBegin);
	
	text("P R E S S  P  T O  R E S U M E", width / 2, height / 1.29);

	if (alphaBegin > 200 || alphaBegin < 50) {
		alphaIncre *= -1;
	}
	alphaBegin += alphaIncre;


}



//......B U B B L E  C L A S S......\\

function Bubble() {
	var c = color((255), random(20, 80));
	var x = random(0 - (width * 20), width * 20);
	var y = random(0 - (height * 15), height * 22);
	var diameterIn = random(1, 50)
	var diameterOut = random(10, 500)
	var diameter = random(diameterIn, diameterOut);
	var ySecond = random(height * 15, height * 22);

	var sy = random(5);

	this.display = function() {

		if (y < 0 - (height * 22 + diameter)) {
			y = ySecond;
		}

		noStroke();
		fill(c)
		ellipse(x, y + diameter, diameter, diameter);

	}

	this.movement = function() {
		if (infoPress === false) {
			y -= sy;

		}


	}



}


//......B A C T E R I A  C L A S S......\\

function Bacteria() {

	dia = 3;
	var rotation = 1;
	var movement = 1;
	var turning = 1;
	var zooming = 1;


	this.display = function() {
		push();
		stroke(255, 90);
		strokeWeight(0.8);
		noFill();
		translate(0, 0);
		rectMode(CENTER);

		rotate(movement);

		for (var iA = 1; iA < 100; iA += 20) {
			rotate(rotation * 2);
			for (var iB = 1; iB < 100; iB += 50) {
				rotate(rotation);
				for (var iC = 1; iC < dia; iC += 10) {
					rotate(rotation);
					quad(iC, dia, dia, dia, iC, iC, dia, dia);
					rotate(turning);
					quad(iC, iC, dia, dia, dia, iC, iC, dia);
					quad(dia, iC, iC, iC, dia, 60, dia, 40);
					rect(0, iC, dia / 2, dia / 2);

				}
			}
		}
		pop();

		if (dia < 3) {
			dia = 3;
		} else {
			dia = dia;
		}


	}

	this.movement = function() {
		if (infoPress === false) {
			amount = 0.005;
			movement += amount;
			rotation = (xControl / 1000);

			if (keyIsPressed) {
				if (key == "A" || key == "a") {
					dia += 1;

				} else if (key == "D" || key == "d") {
					dia -= 1;

				} else {
					dia = dia;
				}
			}
		}
	}



}
