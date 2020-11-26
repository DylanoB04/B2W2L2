var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];
var games = document.getElementById("games");
document.getElementById("games").style.textAlign = "center";
document.getElementById("games").style.fontSize = "150px";
var random = spellen[Math.floor(Math.random()*spellen.length)];
games.innerHTML = random;