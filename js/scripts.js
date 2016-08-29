function Pie(size, sauce, fiber, protein){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.pizzaFiber = [];
  this.pizzaProtein = [];
  this.totalAmount = 0;
<<<<<<< 27adecf96d58eaf4bec69b7264b66fd8c7ac08cf
  console.log(this.pizzaSize, this.pizzaSauce, this.pizzaFiber, this.pizzaProtein)
=======
>>>>>>> initial commit to branch.
};

Pie.prototype.sizeCost = function(){
  if (this.pizzaSize === "Family"){
    return 20;
  }else if (this.pizzaSize === "Large"){
    return 16;
  }else if (this.pizzaSize === "Medium"){
    return 10;
  }else {
    return sizeCost = 6;
  }
};

Pie.prototype.fiberCost = function(){
  return ((this.pizzaFiber.length)* 1);
};

Pie.prototype.proteinCost = function(){
  return (this.pizzaProtein.length * 2);
  console.log(proteinCost);
};

Pie.prototype.totalCost = function(){
  this.totalAmount = (fiberCost + proteinCost + sizeCost);
};


$(document).ready(function(){
  // add Fiber option begin
<<<<<<< 27adecf96d58eaf4bec69b7264b66fd8c7ac08cf
  // $("butt.new-pie-vegies original").click(function(){
  //   $("#pie-vegies").append('<div id="new-pie-vegies">'+
  //                             '<label class="new-pie-vegies clone" for="">Select topping: $1/each</label>'+
  //                             '<select class="new-pie-vegies clone" name="">'+
  //                               '<option>Pineapple</option>'+
  //                               '<option>Mushrooms</option>'+
  //                               '<option>Spinach</option>'+
  //                               '<option>Onions</option>'+
  //                               '<option>Sun Dried Tomatoes</option>'+
  //                               '<option>Artichoke Hearts</option>'+
  //                             '</select>'+
  //                             '</div>')
  // })
=======
  $("#addVegiesbtn").click(function(){
    $("#pie-vegies").append(

      '<div id="new-pie-vegies">'+
                              '<label class="new-pie-vegies clone" for="">Select topping: $1/each</label>'+
                              '<select class="new-pie-vegies clone" name="">'+
                                '<option>Pineapple</option>'+
                                '<option>Mushrooms</option>'+
                                '<option>Spinach</option>'+
                                '<option>Onions</option>'+
                                '<option>Sun Dried Tomatoes</option>'+
                                '<option>Artichoke Hearts</option>'+
                              '</select>'+
                              '</div>')
  });
>>>>>>> initial commit to branch.
    // add Fiber Option end
  // add Protein option begin
  // $("#pie-meat").click(function(){
  //   $("div.new-pie-meat").append('<label class="pie-meat" for="">Select topping: $1/each</label>'+
  //                             '<select class="pie-meat" name="">'+
  //                             '<option>Pepperoni</option>'+
  //                             '<option>Salami</option>'+
  //                             '<option>BBQ Chicken</option>'+
  //                             '<option>Italian Sausage</option>'+
  //                             '<option>Canadian Style Bacon</option>'+
  //                           '</select>')
  // });
  // add Protein option end

  // submitform begin
  $("form.display-option").submit(function(event){
    event.preventDefault();

    var pieSize = $("select.pie-size").val();
    var pieSauce = $("select.pie-sauce").val();
    // var pieVegies = $("select.new-pie-vegies").val();
    // var pieMeats = $("select.new-pie-meat").val();

    var orderedPizza = new Pie(pieSize, pieSauce);
    console.log(orderedPizza.fiberCost());

    // var orderedPizza = new Pie(pieSize, pieSauce, pieVegies, pieMeats);

    $("div.addedToppings").each(function(){
      var pieVegies = $("select.new-pie-vegies").val();
      var pieMeats = $("select.new-pie-meat").val();
      orderedPizza.pizzaFiber.push(pizzaVegies);
      orderedPizza.pizzaProtein.push(pizzaMeat);

    })
  });
  // Submitform end
});
// document end
