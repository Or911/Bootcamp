$(".item").on("click", function () {
  if ($(this).data("instock")) {
    $("body").append(`<p class=cart-item>${$(this).text()}</p>`);
  }
});
