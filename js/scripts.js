$("document").ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    const unSlicedList = $("textarea#food").val();

    console.log(unSlicedList);

    $("form#groceries").hide();
  });
});