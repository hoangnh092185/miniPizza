function Pizza(size, sauce, veggies, proteins){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.topVeggies = veggies;
  this.topProteins = proteins;
};

Pizza.prototype.sizeCost = function(cost2){
    var cost2 = 0;
  if (this.pizzaSize === "Family"){
    totalPriceCost.push(20);
    return cost2 += 20; ;
  }else if (this.pizzaSize === "Large"){
    totalPriceCost.push(16);
    return cost2 += 16; ;
  }else if (this.pizzaSize === "Medium"){
    totalPriceCost.push(10);
    return cost2 += 10; ;
  }else {
    totalPriceCost.push(6);
    return cost2 += 6;
  }
};

var totalPriceCost = [];

var orderedList = function(list){
  $("#toppingList").append("<li>"+"Your toppings is: "+ list +"</li>");
};
var orderedPrice = function(cost){
    $("#totalPizzaCost").append("<li>"+"Your total is :$" + cost +"</li>");
};

$(document).ready(function(){

  $("form.display-option").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("select.pie-size").val();
    var pizzaSauce = $("select.pie-sauce").val();

    var pizzaVeggies = [];
    $('input[name="vegies"]:checked').each(function() {
        pizzaVeggies.push(this.value);
      });
     totalPriceCost.push((pizzaVeggies.length)*0.5);

    var pizzaProteins = [];
    $('input[name="proteins"]:checked').each(function() {
        pizzaProteins.push(this.value);
      });
    totalPriceCost.push((pizzaProteins.length)*2);

    var orderedPizza = new Pizza(pizzaSize, pizzaSauce, pizzaVeggies, pizzaProteins);

    var sum =
      totalPriceCost.reduce(function(a, b) { return a + b; }, 0);

    orderedList (orderedPizza.pizzaSize+orderedPizza.pizzaSauce+orderedPizza.topVeggies+orderedPizza.topProteins);

    orderedPrice (orderedPizza.sizeCost()+sum);
  });

});
