var arrayEen;
var arrayTwee;
var count = document.getElementById("optellen");
var subtract = document.getElementById("aftrekken");
var multiply = document.getElementById("vermenigvuldigen");
var divide = document.getElementById("delen");
function optellen(arrayEen, arrayTwee) {
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];
	for(i = 0; i < 10; i++) {
		count.innerHTML = count.innerHTML + arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]) + "<br>";
	}
}
optellen();
function aftrekken(arrayTwee, arrayEen) {
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	for(i = 0; i < 10; i++) {
		subtract.innerHTML = subtract.innerHTML + arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i] - arrayEen[i]) + "<br>";
	}
}
aftrekken();
function vermenigvuldigen(arrayEen, arrayTwee) {
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];
	for(i = 0; i < 10; i++) {
		multiply.innerHTML = multiply.innerHTML + arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]) + "<br>";
	}
}
vermenigvuldigen();
function delen(arrayTwee, arrayEen) {
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	for(i = 0; i < 10; i++) {
		divide.innerHTML = divide.innerHTML + arrayTwee[i] + " / " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i]) + "<br>";
	}
}
delen();