var button = document.querySelector("button")
var div = document.querySelector("div")

button.addEventListener("click", function(){
    div.style.background = "red"
    button.style.background = "yellow"
    button.style.color = "blue"
    button.style.cursor = "pointer"
    alert("Don't forget to subscribe to my channel")
    var a = prompt("Have you subscribed")
})