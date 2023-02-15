$("button").on("click", function (){
    $("#blogs").append(`<div class="blog"> text </div>`)
    
})
$("body").on("click",".blog", function (){
    $(this).text("blargh")
    console.log(123);
})