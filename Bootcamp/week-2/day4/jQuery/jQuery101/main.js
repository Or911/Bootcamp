// const elem = $("h1")
// console.log(elem);
// $("h4")
// $("h4").css("color", "red")// css method that take property and the value

// const color = $("div").data().color  
// console.log(color) //prints #2980b9

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// $("body").append(elem)
// console.log(elem)


const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("button").on("click", function() {
    addDiv();
  });
  
  $("body").on("click", ".box", function() {
    alert("hi");
  });