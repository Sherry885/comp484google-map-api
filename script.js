$(function() {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
//add new behavior sadness (number)
var pet_info = { name: "Tuan Tuan", weight: 10, happiness: 100, sadness: 20 };

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness = pet_info.happiness + 5;
  // Decrease pet sadness
  pet_info.sadness = pet_info.sadness - 1;
  // Increase pet weight
  pet_info.weight = pet_info.weight + 1;
  checkAndUpdatePetInfoInHtml();

  //extra credit, add audio
  var audiotreat = document.getElementById("audiotreat");
  audiotreat.play();
  //notification
  alert("Treat Tuan Tuan! \nweight + 1 \nhappiness + 5 \nsadness - 1");
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness += 10;
  // Decrease pet sadness
  pet_info.sadness -= 4;
  // Decrease pet weight
  pet_info.weight -= 1;
  checkAndUpdatePetInfoInHtml();

  //extra credit, add audio
  var audioplay = document.getElementById("audioplay");
  audioplay.play();
  //notification
  alert("Play Tuan Tuan! \nweight - 1 \nhappiness + 10 \nsadness - 4");
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness -= 15;
  // Increase pet sadness
  pet_info.sadness += 10;
  // Decrease pet weight
  pet_info.weight -= 3;
  checkAndUpdatePetInfoInHtml();

  //extra credit, add audio
  var audioexercise = document.getElementById("audioexercise");
  audioexercise.play();
  //notification
  alert("Exercise Tuan Tuan! \nweight - 3 \nhappiness - 15 \nsadness + 10");
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
  $(".sadness").text(pet_info["sadness"]); //new behavior sadness
}
