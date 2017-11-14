$(document).ready(function() {
  loadThings();
});

function loadThings() {
  $.ajax({
    url: "/things"
  }).done(processThings)
}

function processThings(things) {
  for(var i = 0; i < things.length; i++) {
    $(".things > ul").append(makeThingHTML(things[i]));
  }
}

function makeThingHTML(thing) {
  return `<li>${thing.name} - ${thing.description}</li>`;
}
