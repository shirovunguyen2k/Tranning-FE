//calculator
function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function cal(num1, num2, operator) {
  return operator(num1, num2);
}

// var houseKeeper1 = {
//   yearOfExperience: 3,
//   name: "Jane",
//   cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
// };

function HouseKeeper(yearOfExperience, name, cleaningRepertoire) {
  this.yearOfExperience = yearOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.cleaning = function () {
    alert("Cleaning up");
  };
}

var houseKeeper1 = new HouseKeeper(3, "Jane", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new HouseKeeper(8, "Ju", ["bathroom", "lobby", "bedroom"]);

//Video 12
function ortherAddEventListener(typeOf, callBack) {
  var eventThat = {
    eventType: "keypress",
    key: "p",
    time: 2,
  };
  if (eventThat.eventType === typeOf) {
    callBack(eventThat);
  }
}
ortherAddEventListener("keypress", function (event) {
  console.log(event);
});
