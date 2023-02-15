$("body").append(`<div class="box"></div><div class="box"></div>`);
$("body").on("mouseover", ".box", function () {
  $(".box").css("background-color", "#8e44ad");
  $(this).css("background-color", "red");
});
