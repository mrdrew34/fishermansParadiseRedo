// I need to have a text box under each item totaling the amount selected.
// I need to sum all the amounts and total number of items selected then place them by the cart icon
// For shopping cart icon use JS to combine logo and pricing/total items
// Make input:text box appear only if >0 num of item is selected for total


// Update textbox when item number is changed
number_rod.onchange = updateRodTotal;
number_reel.onchange = updateReelTotal;
number_combo.onchange = updateComboTotal;
number_rap_husk.onchange = updateRapHuskTotal;
number_rap_shad.onchange = updateRapShadTotal;
number_rap_rap.onchange = updateRapRapTotal,
number_butter.onchange = updateButterTotal;
number_meal.onchange = updateMealTotal;
number_mousies.onchange = updateMousiesTotal;
shopping_cart_total.onchange = calculateTotalPrice;

// Global variables
var grand_total = 0;
var rod_total = document.getElementById('rod_total').value;
var reel_total = document.getElementById('reel_total').value;
var combo_total = document.getElementById('combo_total').value;
var rap_husk_total = document.getElementById('rap_husk_total').value;
var rap_shad_total = document.getElementById('rap_shad_total').value;
var rap_rap_total = document.getElementById('rap_rap_total').value;
var butter_total = document.getElementById('butter_total').value;
var meal_total = document.getElementById('meal_total').value;
var mousies_total = document.getElementById('mousies_total').value;

// Functions to calculate the totals
function updateRodTotal() {
  var num_rod = document.getElementById('number_rod');
  var rod_total = num_rod.value * 39.95;
  //  console.log(rod_total_price);
  document.getElementById('rod_total').value = '$' + rod_total.toFixed(2);
}

function updateReelTotal() {
  var num_reel = document.getElementById('number_reel');
  var reel_total = num_reel.value * 174.95;
  //    console.log(reel_total);
  document.getElementById('reel_total').value = '$' + reel_total.toFixed(2);
}

function updateComboTotal() {
  var num_combo = document.getElementById('number_combo');
  var combo_total = num_combo.value * 209.99;
  console.log(combo_total);
  document.getElementById('combo_total').value = '$' + combo_total.toFixed(2);
}

function updateRapHuskTotal() {
  var num_rap_husk = document.getElementById('number_rap_husk');
  var rap_husk_total = num_rap_husk.value * 8.09;
  console.log(rap_husk_total);
  document.getElementById('rap_husk_total').value =
    '$' + rap_husk_total.toFixed(2);
}

function updateRapShadTotal() {
  var num_rap_shad = document.getElementById('number_rap_shad');
  var rap_shad_total = num_rap_shad.value * 7.59;
  console.log(rap_shad_total);
  document.getElementById('rap_shad_total').value =
    '$' + rap_shad_total.toFixed(2);
}

function updateRapRapTotal() {
  var num_rap_rap = document.getElementById('number_rap_rap');
  var rap_rap_total = num_rap_rap.value * 13.29;
  console.log(rap_rap_total);
  document.getElementById('rap_rap_total').value =
    '$' + rap_rap_total.toFixed(2);
}

function updateButterTotal() {
  var num_butter = document.getElementById('number_butter');
  var butter_total = num_butter.value * 37.99;
  console.log(butter_total);
  document.getElementById('butter_total').value = '$' + butter_total.toFixed(2);
}

function updateMealTotal() {
  var num_meal = document.getElementById('number_meal');
  var meal_total = num_meal.value * 10.99;
  console.log(meal_total);
  document.getElementById('meal_total').value = '$' + meal_total.toFixed(2);
  return meal_total;
}

function updateMousiesTotal() {
  var num_mousies = document.getElementById('number_mousies');
  var mousies_total = num_mousies.value * 15.99;
  console.log(mousies_total);
  document.getElementById('mousies_total').value =
    '$' + mousies_total.toFixed(2);
}

// Value prep
rod_total = parseFloat(rod_total.slice(1));
console.log(rod_total);
reel_total = parseFloat(reel_total.slice(1));
console.log(reel_total);
combo_total = parseFloat(combo_total.slice(1));
console.log(combo_total);
rap_husk_total = parseFloat(rap_husk_total.slice(1));
console.log(rap_husk_total);
rap_shad_total = parseFloat(rap_shad_total.slice(1));
console.log(rap_shad_total);
rap_rap_total = parseFloat(rap_rap_total.slice(1));
butter_total = parseFloat(butter_total.slice(1));
console.log(butter_total);
meal_total = parseFloat(meal_total.slice(1));
console.log(meal_total);
mousies_total = parseFloat(mousies_total.slice(1));
console.log(mousies_total);

// calculate the total price
function calculateTotalPrice() {
  grand_total =
    rod_total +
    reel_total +
    combo_total +
    rap_husk_total +
    rap_shad_total +
    rap_rap_total +
    butter_total +
    meal_total +
    mousies_total;
  //  console.log(grand_total);
  document.getElementById('shopping_cart_total').innerHTML =
    '$' + grand_total.toFixed(2);
  return grand_total;
}

calculateTotalPrice();
console.log(grand_total);

// Eventlistener to update the value on nav bar next to cart icon.
var total_button = document.getElementsByTagName('button');
if (total_button.addEventListener) {
  total_button.addEventListener('click', calculateTotalPrice, false);
} else if (total_button.attachEvent) {
  total_button.attachEvent('onlick', calculateTotalPrice);
}
