function Pizza(size, sauce, vegies, protein){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.pizzaVegies = vegies;
  this.pizzaProtein = protein;
};

Pizza.prototype.sizeCost = function(){
  if (this.pizzaSize === "Family"){
    return 20;
  }else if (this.pizzaSize === "Large"){
    return 16;
  }else if (this.pizzaSize === "Medium"){
    return 10;
  }else {
    return 6;
  }
};

var orderedList = function(toppList){
    $("#toppingList").append("<li>"+"Your toppings is: "+ toppList +"</li>");
};

var orderedPrice = function(cost){
    $("#totalPizzaCost").append("<li>"+"Your total is :$" + cost +"</li>");
};

var toppingProteins= [];
$('input[name="toppingProteins"]:checked').each(function() {
   toppingProteins.push(this.value);
});console.log(toppingProteins);

var toppingVegies= [];
$('input[name="toppingVegies"]:checked').each(function() {
   toppingProteins.push(this.value);
});console.log(toppingVegies);

$(document).ready(function(){

  $("form.display-option").submit(function(event){
    event.preventDefault();

    var pieSize = $("select.pie-size").val();
    var pieSauce = $("select.pie-sauce").val();
    var pieVegies = $("select.new-pie-vegies").val();
    var pieMeats = $("select.new-pie-meat").val();

    var orderedPizza = new Pizza(pieSize, pieSauce, pieVegies, pieMeats);

    orderedList (orderedPizza.pizzaSauce);
    orderedPrice (orderedPizza.sizeCost());

  });

});
