document.getElementsByTagName("h1")[0].style.color = "red";
document.getElementsByClassName("item")[1].textContent = "<i>Tram</i>";
document.getElementsByClassName("item")[2].innerHTML = "<i>Tram</i>";
document.getElementById("btn").style.color = "orange";
document.querySelector("input").click();
// document.querySelector(".tittle").style.fontSize = "10px";
document.querySelector("#listitems a").style.fontSize = "20px";
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("button").style.border = "none";

//document.querySelector("h1").classList  //ds class trong tag
document.querySelector("h1").classList.add("big"); //add class
//document.querySelector("a").attributes //các thuộc tính trong tag
document.querySelector("a").getAttribute("href"); // xem thuoc tinh href
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // thay doi thuoc tinh
