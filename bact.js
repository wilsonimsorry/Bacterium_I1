//......B A C T E R I U M  O N L I N E......\\


var bubbles = [];
var bubblesNumber = 150;
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
	createCanvas(800, 450);

	smooth();
	background(200);

	for (var iBubble = 0; iBubble < bubblesNumber; iBubble++) {
		bubbles.push(new Bubble());

		teria = new Bacteria();
	}


}


// D R A W

function draw() {

	background(0);

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

	controlBar();
	written();
	infoButton();
	sineZoom();
}


// MOUSE AND KEYCONTROL


var xControl = 229;
var sine = 100;
var dia = 1;

// mouse control

function mouseControl() {

	// Control Bar
	if (infoPress === false) {
		if (mouseY < height / 1.08 && mouseY > height / 1.15 && mouseX > width / 10 && mouseX < width / 1.1) {
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
	if (mouseX > 20 && mouseX < 40 && mouseY > 20 && mouseY < 40) {
		infoPress = !infoPress;
	}
}

//Key control

function keyReleased() {
	if (key == 'p' || key == 'P') {
		infoPress = !infoPress;

	}

	if (infoPress === true) {
		isPlaying = false;
	}
}


function keyPressed() {
	if (infoPress === false) {
		xMovement = 0.5;



		if (keyCode == RIGHT_ARROW) {
			xControl += xMovement;

		} else if (keyCode == LEFT_ARROW) {
			xControl -= xMovement;

		}

		if (keyCode == UP_ARROW) {
			sine += increment;

		} else if (keyCode == DOWN_ARROW) {

			sine -= increment;
		}

		if (key == ' ') {
			isPlaying = !isPlaying;
		}





	}
}


// Sine Control

function sineZoom() {
	if (sine < 1) {
		sine = 1;
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

// Controls
function controlBar() {
	noStroke();

	//Bar below text
	push();
	rectMode(CENTER);
	translate(width / 2, height / 1.085);
	fill(0, 180);
	rect(0, 0, width / 1.9, 26, 5);
	pop();

	// Control Bar
	push();
	translate(width / 2, (height / 2.5) + (height / 2))
	noStroke();
	fill(255, 100);
	ellipse(0, 0, width / 2, 3);
	pop();


	// Bar Controller
	push();
	rectMode(CENTER);
	translate(0, (height / 2.5) + (height / 2))
	fill(255, 200);
	rect(xControl, 0, 5, 17, 9);
	pop();


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
	translate(-25, height / 1.070);
	textAlign(LEFT);
	textSize(height / 60);
	text("B  A  C  T  E  R  I  U  M", width / 3.4, 0); // Title
	text("Control: " + int(xControl - 229), width / 1.415, 0); // Control
	text("Zoom: " + int(sine), width / 1.621, 0); // Zoom
	text("Density: " + int(dia - 2), width / 1.915, 0); // Density
	pop();



}

//......I N F O R M A T I O N......\\

var infoPress = false;
var alphaBegin = 200;
var alphaIncre = 3;

function infoButton() {


	//Button
	rectMode(CENTER);

	stroke(255);
	noFill();
	rect(30, 30, 20, 20, 5);
	//Button text
	textSize(height / 50);
	textAlign(CENTER);
	noStroke();
	fill(255, 220);


	if (infoPress === true) {
		text("X", 30, 34);
		infoBox();
	} else if (infoPress === false) {
		text("?", 30, 34);
	}



}

//Information Box

function infoBox() {

	//Box
	rectMode(CENTER);
	stroke(255, 100);
	fill(0, 200);
	rect(width / 2, height / 2.1, width / 2, height / 1.4);

	// Text
	noStroke();
	fill(255, 200);

	// Welcome
	textSize(height / 40);
	textAlign(CENTER);
	text("B  A  C  T  E  R  I  U  M", width / 2, height / 5);



	textSize(height / 50);
	textAlign(LEFT);
	// Information
	push();
	translate(width / 3.2, height / 3.9);
	text("B A C T E R I U M  is a simple interactive visual design project, created by Gary Wilson. This is the first iteration, in which the user may manipulate the density and geometry  of a microorganism.", 0, 0, 310, 100);
	//text("where the user may manipulate a geometrically-designed", 0, 15);
	//text("microorganism, created by Gary Wilson. This is the first iteration.", 0, 30)
	pop();

	// Control
	push();
	translate((width / 2 - 15), (height / 3.4));
	textFont("Helvetica");
	text("A", -65, 50);
	text("Increase Density", 20, 50);
	text("D", -65, 70);
	text("Decrease Density", 20, 70);
	text("UP", -65, 90);
	text("Zoom In", 20, 90);
	text("DOWN", -65, 110);
	text("Zoom Out", 20, 110);
	text("LEFT", -65, 130);
	text("Rotation Control Reverse", 20, 130);
	text("RIGHT", -65, 150);
	text("Rotation Control Forward", 20, 150);
	text("SPACE", -65, 170);
	text("Autoplay Forward Rotation", 20, 170);

	text("P", -65, 190);
	textFont("Helvetica");
	text("Pause", 20, 190);
	pop();

	textAlign(CENTER);
	textSize(height / 60);
	fill(255, alphaBegin);
	text("P R E S S  P  T O  R E S U M E", width / 2, height / 1.25);

	if (alphaBegin > 200 || alphaBegin < 50) {
		alphaIncre *= -1;
	}
	alphaBegin += alphaIncre;


}



//......B U B B L E  C L A S S......\\

function Bubble() {
	var c = color(random(220, 255), random(20, 80));
	var x = random(0 - (width * 5.5), width * 5.5);
	var y = random(0 - (height * 5), height * 20);
	var diameterIn = random(1, 50)
	var diameterOut = random(10, 500)
	var diameter = random(diameterIn, diameterOut);
	var ySecond = random(height*10, height*20);

	var sy = random(5);

	this.display = function() {
		
		if(y < 0-(height*8+diameter)) {
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
