var h1 = document.querySelector("h1")
h1.style.fontSize = "50px"
h1.addEventListener("mouseover", function(){
    // alert("CONNECTED!!!")
    h1.style.color = "green"  
})
h1.addEventListener("mouseout", function(){
    h1.style.color = "black"
})