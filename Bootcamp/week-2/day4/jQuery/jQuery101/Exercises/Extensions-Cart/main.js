$(".item").on("click", function () {
  if ($(this).data("instock")) {
    if (!$(this).data("times")){
      $("body").append(`<p class=cart-item>${$(this).text()}</p>`);

    }
    $(".cart-item").data("times",+1)
  }
});

$("body").on("click",".cart-item", function () {
  $(this).remove()
})
