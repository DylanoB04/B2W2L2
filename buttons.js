var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var img0 = document.getElementById('img0');
var count = Number(0);
var count2 = Number(0);
var count3 = Number(0);
button_1.addEventListener("click", function() {
	img0.src = "images/1.jpg";
	document.getElementById('page').style.background = "url('images/bg1.jpg')";
	button_1.innerHTML = count +=1;
})
button_2.addEventListener("click", function() {
	img0.src = "images/2.jpg";
	document.getElementById('page').style.background = "url('images/bg2.jpg')";
	button_2.innerHTML = count2 +=1;
})
button_3.addEventListener("click", function() {
	img0.src = "images/3.jpg";
	document.getElementById('page').style.background = "url('images/bg3.jpg')";
	button_3.innerHTML = count3 +=1;
})