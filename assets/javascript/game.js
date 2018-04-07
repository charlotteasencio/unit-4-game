//Define the variables
$(document).ready(function () {

var crystalValue = 0; 
var crystalA = 0;
var crystalB = 0;
var crystalC = 0;
var crystalD = 0;
var wins = 0;
var losses = 0;

function reset(){
  crystalValue = 0; 
  crystalA = 0;
  crystalB = 0;
  crystalC = 0;
  crystalD = 0;
  computerNumber = Math.floor(Math.random() * 101) + 19;
  console.log(computerNumber);
  $("div.computerNumber").html("Computer number:" + " " + computerNumber);
  $("div.crystalValue").html("Crystal Value:" + " " + crystalValue);
}


//Computer generates a random number between 19 and 120
var computerNumber = Math.floor(Math.random() * 101) + 19;
console.log(computerNumber);

$("div.computerNumber").html("Computer Number:" + " " + computerNumber);

function addCrystalValue(value){
    crystalValue += value;
    $("div.crystalValue").html("Crystal Value:" + " " + crystalValue);

    if (crystalValue === computerNumber){
      alert("Just the right amount of crystals. You win!");
      wins++;
      console.log(wins);
      reset();
      
      $("#wins").html("Wins:" + " " + wins);
    }

    if (crystalValue > computerNumber){
      alert("Too many crystals. You lose.");
      losses++;
      console.log("losses:" + losses);
      reset();

      $("#losses").html("Losses:" + " " + losses);

    } 

}

//Crystals A-D are assigned a random number between 1 and 12 on click. This is hidden
//When each crystal is clicked, its number is added to the crystal value and displayd there

  $("#pinkCrystal").click(function() {
  if (crystalA === 0){
    crystalA = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalA);
} else {
    addCrystalValue(crystalA);
  }
});

$("#greenCrystal").click(function() {
  if (crystalB === 0){
    crystalB = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalB);
} else {
    addCrystalValue(crystalB);
  }
});

$("#orangeCrystal").click(function() {
  if (crystalC === 0){
    crystalC = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalC);
} else {
    addCrystalValue(crystalC);
  }
});

$("#blueCrystal").click(function() {
  if (crystalD === 0){
    crystalD = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalD);
} else {
    addCrystalValue(crystalD);
  }
});


});