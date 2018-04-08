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
  $("div.computerNumber").html("Amount to Collect:"+ " " + computerNumber);
  $("div.crystalValue").html("Amount you Have Collected:" + " " + crystalValue);
}


//Computer generates a random number between 19 and 120
var computerNumber = Math.floor(Math.random() * 101) + 19;
console.log(computerNumber);

$("div.computerNumber").html("Amount to Collect:" + " " + computerNumber);

function addcrystalValue(value){
    crystalValue += value;
    $("div.crystalValue").html("Amount you Have Collected:" + " " + crystalValue);

    if (crystalValue === computerNumber){
      setTimeout(function () {
        alert("Just the right amount of crystals! You win!");
    }, 100);
      setTimeout(function(){
      reset();
    }, 500);
    wins++;
      
      $("#wins").html("Wins:" + " " + wins);
    }

    if (crystalValue > computerNumber){
        
      setTimeout(function (){
        alert("You collected too many crystals. You lose.");
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

  $("#pinkcrystal").click(function() {
  if (crystalA === 0){
    crystalA = Math.floor(Math.random() * 12) + 1;
    addcrystalValue(crystalA);
} else {
    addcrystalValue(crystalA);
  }
});

$("#greencrystal").click(function() {
  if (crystalB === 0){
    crystalB = Math.floor(Math.random() * 12) + 1;
    addcrystalValue(crystalB);
} else {
    addcrystalValue(crystalB);
  }
});

$("#orangecrystal").click(function() {
  if (crystalC === 0){
    crystalC = Math.floor(Math.random() * 12) + 1;
    addcrystalValue(crystalC);
} else {
    addcrystalValue(crystalC);
  }
});

$("#bluecrystal").click(function() {
  if (crystalD === 0){
    crystalD = Math.floor(Math.random() * 12) + 1;
    addcrystalValue(crystalD);
} else {
    addcrystalValue(crystalD);
  }
});

});