function Pie(size, sauce){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.pizzaVegies = [];
  this.pizzaProtein = [];
}


function sauce(){
  var priceVegie = this.pizzaVegies.length * 1;
}

function protein(){
  var priceProtein = this.pizzaProtein.length * 2;
}

function total(){
  var orderTotal = priceProtein + priceVegie + 5;
}




$(document).ready(function(){

  // submitform begin
  $("form.form-group").submit(function(){
    var pizzaSize = $("Large").val();
    var pizzaSauce = $("Pesto").val();

    var orderedPizza = new Pie(size, sauce, vegies, Protein)
    $(".addedToppings").each(function(){
      var pizzaVegies = ("Mushroom", "Spinach", "Artichoke").val();
      var pizzaProtein = ("Sausage", "Pepperoni", "Chicken").val();
      var toppingChoices = new 
    })

  });

  console.log(orderedPizza.pizzaSize);
  // Submitform end
  // add topping option begin
  $("button").click(function(){
    $("div").append()
  })
  // add Protein option end
  $("button").click(function(){
    $("div").append()
  })
  // add Protein option end














})
