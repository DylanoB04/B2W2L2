var days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
for(i = 0; i < 7; i++) {
	text.innerHTML = text.innerHTML + " - " + days[i];
}
for(i = 0; i < 5; i++) {
	text2.innerHTML = text2.innerHTML + " - " + days[i];
}
for(i = 5; i < 7; i++) {
	text3.innerHTML = text3.innerHTML + " - " + days[i];
}
for(i = 6; i > -1; i--) {
	text4.innerHTML = text4.innerHTML + " - " + days[i];
}
for(i = 6; i > 4; i--) {
	text5.innerHTML = text5.innerHTML + " - " + days[i];
}