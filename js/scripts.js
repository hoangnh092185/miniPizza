function Pizza(size, sauce, veggies, proteins){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.topVeggies = veggies;
  this.topProteins = proteins;

};console.log(Pizza.topVeggies);
var vegCost = [];
var proCost = [];
// var sizeCost = [];
// console.log(sizeCost);


// toppingVegies.prototype.veggiesCost = function(){
//   totalCost.push(parseInt(toppingVegies.length));
// };
// toppingProteins.prototype.proteinsCost = function(){
//   totalCost.push(parseInt(toppingProteins.length));
// };

// $('input[name="vegies"]:checked').each(function() {
// toppingVegies.push(this.value);
// }); console.log(toppingVegies);

Pizza.prototype.sizeCost = function(hold){
  if (this.pizzaSize === "Family"){
    hold = (20);
  }else if (this.pizzaSize === "Large"){
    totalCost.push(16);
  }else if (this.pizzaSize === "Medium"){
    sizeCost.push(10);
  }else {
    sizeCost.push(6);
  }
};

// var pizzaVeggies = [];
// vegCost = function(hold){
//   hold = pizzaVeggies.length;
// };


Pizza.prototype.vegCost = function(){
    console.log(this.topVeggies);
    var cost1 = this.topVeggies.length;
    vegCost.push(cost1);
};
//
// Pizza.prototype.totalCost = function(){
//   var cost2 = this.topProteins.length;
//   totalCost.push(cost2);
// };


var orderedList = function(holder){
  $("#toppingList").append("<li>"+"Your toppings is: "+ holder +"</li>");
};

var orderedPrice = function(cost){
    $("#totalPizzaCost").append("<li>"+"Your total is :$" + cost +"</li>");
};

$(document).ready(function(){

  $("form.display-option").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("select.pie-size").val();
    var pizzaSauce = $("select.pie-sauce").val();

    var orderedPizza = new Pizza(pizzaSize, pizzaSauce, pizzaVeggies, pizzaProteins);

    var pizzaVeggies = [];
    $('input[name="vegies"]:checked').each(function() {
        pizzaVeggies.push(this.value);
      });
    var pizzaProteins = [];
    $('input[name="proteins"]:checked').each(function() {
        pizzaProteins.push(this.value);
      });

    var orderedPizza = new Pizza(pizzaSize, pizzaSauce, pizzaVeggies, pizzaProteins);

    orderedList (orderedPizza.pizzaSauce);
    orderedPrice (orderedPizza.sizeCost());
  });
});
