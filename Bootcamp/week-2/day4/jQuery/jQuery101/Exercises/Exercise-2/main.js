$("button").on("click", function () {
  let newLi = `<li>${$("#inputName").val()}</li>`;
  $("ul").append(newLi);
});
$("ul").on("click" , "li", function(){
  (this).remove()
})
