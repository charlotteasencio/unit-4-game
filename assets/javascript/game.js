//Define the variables
$(document).ready(function () {

var coffeeValue = 0; 
var coffeeA = 0;
var coffeeB = 0;
var coffeeC = 0;
var coffeeD = 0;
var wins = 0;
var losses = 0;

function reset(){
  coffeeValue = 0; 
  coffeeA = 0;
  coffeeB = 0;
  coffeeC = 0;
  coffeeD = 0;
  computerNumber = Math.floor(Math.random() * 101) + 19;
  console.log(computerNumber);
  $("div.computerNumber").html("Amount of Caffeine Needed:"+ " " + computerNumber);
  $("div.coffeeValue").html("Amount of Caffeine Consumed:" + " " + coffeeValue);
}


//Computer generates a random number between 19 and 120
var computerNumber = Math.floor(Math.random() * 101) + 19;
console.log(computerNumber);

$("div.computerNumber").html("Amount of Caffeine Needed:" + " " + computerNumber);

function addCoffeeValue(value){
    coffeeValue += value;
    $("div.coffeeValue").html("Amount of Caffeine Consumed:" + " " + coffeeValue);

    if (coffeeValue === computerNumber){
      setTimeout(function () {
        alert("Just the right amount of coffee! You win!");
    }, 100);
      setTimeout(function(){
      reset();
    }, 500);
    wins++;
      
      $("#wins").html("Wins:" + " " + wins);
    }

    if (coffeeValue > computerNumber){
        
      setTimeout(function (){
        alert("You drank too much coffee and were hyper all day! You lose.");
    }, 100);
      setTimeout(function(){
        reset();
      }, 500);
      losses++;

      $("#losses").html("Losses:" + " " + losses);

    } 
}

//Crystals A-D are assigned a random number between 1 and 12 on click. This is hidden
//When each crystal is clicked, its number is added to the crystal value and displayd there

  $("#peachcoffee").click(function() {
  if (coffeeA === 0){
    coffeeA = Math.floor(Math.random() * 12) + 1;
    addCoffeeValue(coffeeA);
} else {
    addCoffeeValue(coffeeA);
  }
});

$("#mintcoffee").click(function() {
  if (coffeeB === 0){
    coffeeB = Math.floor(Math.random() * 12) + 1;
    addCoffeeValue(coffeeB);
} else {
    addCoffeeValue(coffeeB);
  }
});

$("#yellowcoffee").click(function() {
  if (coffeeC === 0){
    coffeeC = Math.floor(Math.random() * 12) + 1;
    addCoffeeValue(coffeeC);
} else {
    addCoffeeValue(coffeeC);
  }
});

$("#pinkcoffee").click(function() {
  if (coffeeD === 0){
    coffeeD = Math.floor(Math.random() * 12) + 1;
    addCoffeeValue(coffeeD);
} else {
    addCoffeeValue(coffeeD);
  }
});

});