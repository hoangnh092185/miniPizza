function Pizza(size, sauce, veggies, proteins){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.topVeggies = veggies;
  this.topProteins = proteins;
};

Pizza.prototype.sizeCost = function(cost2){
    var cost2 = 0;
  if (this.pizzaSize === "Family"){
    return cost2 += 20; ;
  }else if (this.pizzaSize === "Large"){
    return cost2 += 16; ;
  }else if (this.pizzaSize === "Medium"){
    return cost2 += 10; ;
  }else {
    return cost2 += 6;
  }
};

Pizza.prototype.arrayVeggieCost = function() {
  return veggCost = (this.topVeggies.length)*0.5;
}
Pizza.prototype.arrayProteinCost = function() {
  return protCost = (this.topProteins.length)*2;
}

var orderedList = function(obj){
  for (var prop in obj) {
  if(obj.hasOwnProperty(prop)) {
    $("#toppingList").append(prop + " = " + obj[prop] +"<br>");
    }
  }
};
var orderedPrice = function(cost){
    $("#totalPizzaCost").append("<li>"+"Your total is :$" + cost +"</li>");
};

function clear() {
$("#toppingList").empty();
$("#totalPizzaCost").empty();
}

$(document).ready(function(){

  $("form.display-option").submit(function(event){
    event.preventDefault();
  clear();


    var pizzaSize = $("select.pie-size").val();
    var pizzaSauce = $("select.pie-sauce").val();

    var pizzaVeggies = [];
    $('input[name="veggies"]:checked').each(function() {
        pizzaVeggies.push(this.value);
      });

    var pizzaProteins = [];
    $('input[name="proteins"]:checked').each(function() {
        pizzaProteins.push(this.value);
      });

    var orderedPizza = new Pizza(pizzaSize, pizzaSauce, pizzaVeggies, pizzaProteins);

    orderedList(orderedPizza);

    orderedPrice (orderedPizza.sizeCost()+orderedPizza.arrayVeggieCost()+orderedPizza.arrayProteinCost());
  });
});
