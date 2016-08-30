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
$('input[name="proteins"]:checked').each(function() {
   toppingProteins.push("Proteins1", "Proteins2", "Proteins3");
   alert("proteins")
});

// var matches = [];
// $(".className:checked").each(function() {
//     matches.push(this.value);
// });

var toppingVegies= [];
$('input[name="vegies"]:checked').each(function() {
   toppingVegies.push("Vegies1", "Vegies2", "Vegies3");
   alert("vegies")
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
