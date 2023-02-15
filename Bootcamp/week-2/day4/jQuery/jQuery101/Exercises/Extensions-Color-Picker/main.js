$("span").addClass("picker");
$(this).css("background-color", $(this).data("color"));

$("span").on("click", function () {
  $(".box").css("background-color", $(this).data("color"));
});

$(this).css("background-color", $(this).data("color"));

$("span:nth-child(1)").css("background-color",$("span:nth-child(1)").data("color"));


$("span:nth-child(2)").css(
  "background-color",
  $("span:nth-child(2)").data("color")
);
$("span:nth-child(3)").css(
  "background-color",
  $("span:nth-child(3)").data("color")
);
$("span:nth-child(4)").css(
  "background-color",
  $("span:nth-child(4)").data("color")
);
