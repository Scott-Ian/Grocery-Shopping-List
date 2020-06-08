$("document").ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    const unSlicedList = $("textarea#food").val();

    console.log(unSlicedList);
    
    const slicedFood = unSlicedList.split(","); 
    slicedFood.forEach(function (food) {
      $(".shopping-list").append(`<li> ${food} </li>`);
    });

    $("form#groceries").hide();
    $(".shopping").show();
  });
});