$(document).ready(function() {
  $.getJSON("/things", processThings);

  // SAME THING as above
  // $.ajax({
  //   dataType: "JSON",
  //   url: "/things"
  // }).done(processThings);

  $(".lists ul:nth-child(3) li:nth-child(1)").on("click", function() {
      $(this).closest("ul").css("background-color", "pink")
  })

  $(".lists ul:nth-child(3) li:nth-child(2)").on("click", function() {
      $(this).closest("ul").css("background-color", "green")
  })

  $(".lists ul:nth-child(3) li:nth-child(3)").on("click", function() {
      $(this).closest("ul").css("background-color", "blue")
  })

  $(".createThing > form").on("submit", function(event){
    event.preventDefault();

    var $form = $(this);
    var url = $form.attr("action");
    var method = $form.attr("method");
    var data = $form.serialize();

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });

    request.done(function(response) {
      $("#errors").empty();
      var html = makeThingHTML(response);
      $(".things > ul").append(html);
      $form.trigger("reset");
    });

    request.fail(function(response){
      $("#errors").empty();
      var errors = JSON.parse(response.responseText);
      for(var i = 0; i < errors.length; i++) {
        $("#errors").append(`<li>${errors[i]}</li>`);
      }
    });
  })
});

function processThings(things) {
  for(var i = 0; i < things.length; i++) {
    $(".things > ul").append(makeThingHTML(things[i]));
  }
}

function makeThingHTML(thing) {
  return `<li>${thing.name} - ${thing.description}</li>`;
}
