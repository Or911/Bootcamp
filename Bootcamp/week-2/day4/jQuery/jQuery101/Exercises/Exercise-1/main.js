$("button").on("click", function () {
  let newLi = `<li>${$("#inputName").val()}</li>`;
  $("ul").append(newLi);
});
