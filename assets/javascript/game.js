//Define the variables
$(document).ready(function () {

var computerNumber;
var crystalValue = 0; 
var crystalA;
var crystalB;
var crystalC;
var crystalD;
var wins = 0;
var losses = 0;

//Computer generates a random number between 19 and 120
var computerNumber = Math.floor(Math.random() * 101) + 19;
console.log(computerNumber);

function addCrystalValue(value){
    crystalValue += value
    $("#crystalValues").html(crystalValue);
    console.log(crystalValue);
}

//Crystals A-D are assigned a random number between 1 and 12 on click. This is hidden
//When each crystal is clicked, its number is added to the crystal value and displayd there
$("body").on("click", "#pinkCrystal", function() {
    var crystalA = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalA);

  }).on("click", "#greenCrystal", function() {
      var crystalB = Math.floor(Math.random() * 12) + 1;
      addCrystalValue(crystalB);

  }).on("click", "#orangeCrystal", function() {
    var crystalC = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalC);

  }).on("click", "#blueCrystal", function(){
    var crystalD = Math.floor(Math.random() * 12) + 1;
    addCrystalValue(crystalD);

  });



//if user# equals computer#, wins go up by one and rest of game resets

//if user# is greater than computer#, losses go up and rest of game resets

});