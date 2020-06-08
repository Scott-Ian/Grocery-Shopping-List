$("document").ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    const unSlicedList = $("textarea#food").val();

    
    const slicedFood = unSlicedList.split(","); 
    
    let upperCaseSlicedFood = [];
    slicedFood.forEach(function(food) {
      upperCaseSlicedFood.push(food.toUpperCase());
    });
    upperCaseSlicedFood.sort();

    upperCaseSlicedFood.forEach(function (food) {
      $(".shopping-list").append(`<li> ${food} </li>`);
    });

    $("form#groceries").hide();
    $(".shopping").show();
  });
});