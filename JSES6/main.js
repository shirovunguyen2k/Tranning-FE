var a = 3;
var b = 8;
var temp = a;
a = b;
b = temp;
console.log("a = " + a);
console.log("b = " + b);

function myfunction() {
  document.getElementById("demo").innerHTML = "Welcome";
}
// var myName = "Tram";
// window.alert(myName);

//Length
var myName = window.prompt("what is your name?");
console.log(myName);
console.log(myName.length);
window.alert(
  "Ban da nhap " +
    myName.length +
    " ki tu, ban con " +
    (100 - myName.length) +
    " ki tu"
);

//console.log(myName.indexOf("tram")); //Find string index
// console.log(myName.slice(0, 14)); // Cutting string

// Uppercase the firts character
var first = myName.slice(0, 1);
var up = first.toUpperCase();
var final = myName.slice(1, myName.length);
var low = final.toLowerCase();
console.log(up + low);

// + additon   - subtraction    * multiplication   / division   % Modulo

// console.log(typeof human);

//Number of milk bottles
function getMilk(money) {
  var bottle = Math.floor(money / 1.5); //math.floor lấy nguyên
  console.log("bottle milk: " + bottle);
}
getMilk(2);

//Tính số năm, tháng, tuần, ngày còn lại nêu sống tới 90 tuổi
function lifeInwweeks(age) {
  var year = 90 - age;
  var month = year * 12;
  var week = year * 52;
  var day = year * 365;
  console.log(
    "Year " + year + " month " + month + " week " + week + " day " + day
  );
}
lifeInwweeks(12);

// number of milk bottles and excess money
function numberOfBottle(startingMoney, costPerBottle) {
  var number = Math.floor(startingMoney / costPerBottle);
  return number;
}
function change(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}
function getMilk(money, cost) {
  console.log("Buy " + numberOfBottle(money, cost) + " bottle of milk");
  return change(money, cost);
}
console.log("Hello Master here is your " + getMilk(5, 3) + " change");

//index BMI
function calcBMI(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return bmi;
}
console.log("BMI: " + calcBMI(40, 1.57));

//Random
function random() {
  //random tu 0 - 0.999999... vì vậy muôn đên sô nao nhân số đó và cộng thêm 1 để băt đau tu 1
  var man = window.prompt("Name man: ");
  var woman = window.prompt("Name woman: ");
  var n = Math.floor(Math.random(n) * 100 + 1);
  return n;
}
var nn = random();
if (nn >= 70) {
  console.log("High: " + nn);
}
if (nn >= 30 && nn < 70) {
  console.log("Medium: " + nn);
}
if (nn < 30) {
  console.log("Low: " + nn);
}

//Leap year
function isLeap(year) {
  if (year % 4 !== 0) {
    //console.log("Khong phai nam nhuan");
    return 0;
  } else {
    if (year % 100 !== 0) {
      //console.log("Nam nhuan");
      return 1;
    } else {
      if (year % 400 === 0) {
        // console.log("Nam nhuan");
        return 1;
      } else {
        // console.log("Khong phai nam nhuan");
        return 0;
      }
    }
  }
}
var year = window.prompt("Year");
var leap = isLeap(year);
if (leap === 0) {
  console.log("Not leap year");
} else {
  console.log("Lead year");
}

//array
var guestList = ["Tram", "Tram1", "Tram2", "Tram3", "Tram4", "Tram5"];
var name = window.prompt("What your name?");
if (guestList.includes(name)) {
  window.alert("Welcome!");
} else {
  window.alert("Sorry, maybe next time");
}

var output = [];
var count = 1;
function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzbuzz"); //push add emlement to array
    } else if (count % 3 === 0) {
      output.push("fizz");
    } else if (count % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

fizzBuzz();

//random who is buy lunch today
var names = ["huy", "tram", "thu", "xuan", "anh"];
function whoPaying(name) {
  var number = names.length;
  var randomNumber = Math.floor(Math.random() * number);
  var randomName = names[randomNumber];
  return randomName + " paying";
}
console.log(whoPaying(names));

//The song "99 Bottles of Beer"
//99 bottle of beer on the wall, 99 bottle of beer. Tale 1 down, pass it around, 99 bottle on the wall

var number = 99;
while (number >= 0) {
  console.log(
    number +
      " bottle of beer on the wall," +
      number +
      " bottle of beer. Tale 1 down, pass it around," +
      number +
      "bottle on the wall"
  );
  number--;
}

//Fibonacci sequence
function fibonacci(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (i = 2; i < n; i++) {
      output.push(output[output.length - 1] + output[output.length - 2]);
    }
  }
  return output;
}
console.log(fibonacci(6));
