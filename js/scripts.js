function Pie(size, sauce){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.pizzaFiber = [];
  this.pizzaProtein = [];
  this.totalAmount = 0;
};


Pie.prototype.fiberCost = function(){
  return this.pizzaFiber.length * 1;
  console.log(fiberCost);
};

Pie.prototype.sizeCost = function(){
  var pizzaCost = 0;
  if (this.pizzaSize === "Family"){
    pizzaCost = 20;
  }if (this.pizzaSize === "Large"){
    pizzaCost = 16;
  }if (this.pizzaSize === "Medium"){
    pizzaCost = 10;
  }if (this.pizzaSize === "Small"){
    pizzaCost = 6;
  }
};

Pie.prototype.proteinCost = function(){
  return this.pizzaProtein.length * 2;
  console.log(proteinCost);
};

Pie.prototype.totalCost = function(){
  this.totalAmount = fiberCost + proteinCost + sizeCost;
};


$(document).ready(function(){

  submitform begin
  $("form.form-group").submit(function(){
    var pizzaSize = $("").val();
    var pizzaSauce = $("").val();

    var orderedPizza = new Pie(size, sauce);

    $(".addedToppings").each(function(){
      var pizzaVegies = ("Mushroom", "Spinach", "Artichoke").val();
      var pizzaMeats = ("Sausage", "Pepperoni", "Chicken").val();
      orderedPizza.pizzaFiber.push(pizzaVegies);
      orderedPizza.pizzaProtein.push(pizzaMeat);
    })

  });

  Submitform end

  add topping option begin
  $("button.pie-veggies").click(function(){
    $("div").append()
  })
  add Protein option end
  $("button.pie-meat").click(function(){
    $("div.pie-meat").append()
  })
  add Protein option end



})
