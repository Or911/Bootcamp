// $(".feedme").on("click", function (){
//   let divCopy = (this)
//   $("body").append(divCopy)
//   console.log(divCopy);
// })

// not work



//work 

// $(".feedme").on("click", function (){
//   let divCopy = `<div class=feedme> ${$(this).text()}</div>`
//   $("body").append(divCopy)
//   console.log(divCopy);
// })


$("body").on("click",".feedme", function (){
  let divCopy = $(this).clone()
  $("body").append(divCopy)
  console.log(divCopy);
})