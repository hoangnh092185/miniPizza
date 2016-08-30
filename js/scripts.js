function Pizza(size, sauce){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;

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

var orderedList = function(holder){
  $("#toppingList").append("<li>"+"Your toppings is: "+ holder +"</li>");
};

var orderedPrice = function(cost){
    $("#totalPizzaCost").append("<li>"+"Your total is :$" + cost +"</li>");
};

var toppingProteins= [];
$('input[name="toppingProteins"]:checked').each(function() {
   toppingProteins.push(this.value);
   console.log(toppingProteins);
});

var toppingVegies= [];
$('input[name="toppingVegies"]:checked').each(function() {
   toppingProteins.push(this.value);
   console.log(toppingVegies);
});

$(document).ready(function(){

  $("form.display-option").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("select.pie-size").val();
    var pizzaSauce = $("select.pie-sauce").val();
    // var pieVegies = $("select.new-pie-vegies").val();
    // var pieMeats = $("select.new-pie-meat").val();

    var orderedPizza = new Pizza(pizzaSize, pizzaSauce);

    orderedList (orderedPizza.pizzaSauce);
    orderedPrice (orderedPizza.sizeCost());

  });

});
