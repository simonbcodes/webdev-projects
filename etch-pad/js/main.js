$(document).ready(function() {
  var size = prompt("What size do you want the grid to be?");
  generateGrid(size);

});

function generateGrid(sideLength) {
  console.log("generating grid");
  for(var i = 0; i <  sideLength*sideLength; i++) {
    $("#grid-wrapper").append('<div class="grid-space"></div>');
  }
  $(".grid-space").height(($("#grid-wrapper").height()-sideLength*2)/sideLength);
  $(".grid-space").width(($("#grid-wrapper").width()-sideLength*2)/sideLength);
  userHover();
  useButtons();
}

function userHover() {
  $(".grid-space").mouseenter(function() {
    console.log("user is hovering");
    $(this).addClass("marked");
  });
}

function useButtons() {
  $("#reset").click(function() {
    console.log("user pressed reset");
    $(".marked").removeClass("marked");
  });
  $("#new-grid").click(function() {
    console.log("user pressed new grid");
    var size = prompt("What size do you want the grid to be?");
    $(".grid-space").remove();
    generateGrid(size);
  });
}
