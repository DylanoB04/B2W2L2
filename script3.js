var array = [2,4,6,8];
var tafel1 = document.getElementById("tafelEen");
var tafel2 = document.getElementById("tafelTwee");
var tafel3 = document.getElementById("tafelDrie");
var tafel4 = document.getElementById("tafelVier");
var titel1 = document.getElementById("titel1");
var titel2 = document.getElementById("titel2");
var titel3 = document.getElementById("titel3");
var titel4 = document.getElementById("titel4");
function t1() {
	titel1.innerHTML = "Tafel van " + array[0] + ":";
	for(i = 1; i < 11; i++) {
		tafel1.innerHTML = tafel1.innerHTML + [i] + " x " + array[0] + " = " + (i * array[0]) + "<br>";
	}
}
t1();
function t2() {
	titel2.innerHTML = "Tafel van " + array[1] + ":";
	for(i = 1; i < 11; i++) {
		tafel2.innerHTML = tafel2.innerHTML + [i] + " x " + array[1] + " = " + (i * array[1]) + "<br>";
	}
}
t2();
function t3() {
	titel3.innerHTML = "Tafel van " + array[2] + ":";
	for(i = 1; i < 11; i++) {
		tafel3.innerHTML = tafel3.innerHTML + [i] + " x " + array[2] + " = " + (i * array[2]) + "<br>";
	}
}
t3();
function t4() {
	titel4.innerHTML = "Tafel van " + array[3] + ":";
	for(i = 1; i < 11; i++) {
		tafel4.innerHTML = tafel4.innerHTML + [i] + " x " + array[3] + " = " + (i * array[3]) + "<br>";
	}
}
t4();	