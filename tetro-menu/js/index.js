$(document).ready(function() {
  $(".block").click(function() {
  	$(this).toggleClass("padding-content");
    $(this).children("content-text").toggleClass("invisible");
  });
  $(".block").hover(function() {
    $(this).toggleClass("boxshadow");
   $(this).children(".content").toggleClass("letter-space");
  });
  $(document).keydown(function() {
    $("#container").toggleClass("padding");
  });
});