var arr = document.querySelectorAll(".drum").length;
// for (var i = 0; i < arr; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
// }

var i = 0;
while (i < arr) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked");
    // var audio = new Audio("sound/m.mp3");
    // audio.play();
    //console.log(this.innerHTML); // Activate check
    //this.style.color = "white"; //after check
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  i++;
}
document.addEventListener("keypress", function (event) {
  //alert("Pressssssss");
  // console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sound/m.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sound/a.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sound/s.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sound/d.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("sound/j.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("sound/k.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("sound/l.mp3");
      tom7.play();
      break;
    default:
      console.log("key");
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("press");
  setTimeout(function () {
    activeButton.classList.remove("press");
  }, 100);
}

document.querySelector("h1").classList.add("press");
