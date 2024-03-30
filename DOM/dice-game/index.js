var random1 = Math.floor(Math.random() * 6 + 1);
var imgRandom1 = "pic" + random1 + ".png";
var sourceRandom1 = "img/" + imgRandom1;
var i1 = document.querySelectorAll(".image")[0];
i1.setAttribute("src", sourceRandom1);

var random2 = Math.floor(Math.random() * 6 + 1);
var imgRandom2 = "pic" + random2 + ".png";
var sourceRandom2 = "img/" + imgRandom2;
var i2 = document.querySelectorAll(".image")[1];
i2.setAttribute("src", sourceRandom2);

var im1 = i1.setAttribute("src", sourceRandom1);
var im2 = i2.setAttribute("src", sourceRandom2);
if (random1 === random2) {
  document.querySelector("h1").innerHTML = "Draw";
}
if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Player 1 win";
}
if (random1 < random2) {
  document.querySelector("h1").innerHTML = "Player 2 win";
}
