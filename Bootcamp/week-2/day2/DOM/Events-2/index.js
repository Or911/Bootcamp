
// לא חייב את הגדרת המשתנה 
// box.onclick = function () {
//     box.innerHTML = "clicked"
// }
// console.log(typeof(section));

// box.onmouseenter = function (){
//     box.style.color = "red"
// }

const button1 = document.createElement("div")

button1.setAttribute("class","button1")
button1.onclick = function () {
    button1.innerHTML = "i am live !"
}

document.getElementById("box").appendChild(button1)
