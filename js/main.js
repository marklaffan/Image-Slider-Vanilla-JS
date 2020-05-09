// JavaScript Document


var slideInterval = 4000;

function getFigures() {
	return document.getElementById('carousel').getElementsByTagName('figure');
} // End of Function


function moveForward() {
	var pointer = 0;
	var figures = getFigures();
	for (var i=0; i<figures.length; i++) {
		if (figures[i].className == 'visible') {
			figures[i].className = 'hidden';
			pointer = i;
		}  // End of If statement
	}  // End of For loop
	if (++pointer == figures.length) {
		pointer = 0;
	}  // End of If statement
	figures[pointer].className = 'visible';
	setTimeout(moveForward, slideInterval);
}  // End of Function


function startPlayback() {
	setTimeout(moveForward, slideInterval);
} // End of Function


startPlayback();