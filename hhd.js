// const text = "Hello World"
// const utterance = new SpeechSynthesisUtterance(text);
// window.SpeechSynthesis.speak(utterance);
var button = document.querySelector("button")
var btn = document.querySelector("#btn")
var h1 = document.querySelector("h1")
var h1score = 0;
var h2score = 0;
var span = document.querySelector("span")

button.addEventListener("click", function(){
    h1score++;
    span.textContent = h1score;
})
btn.addEventListener("click", function(){
    h1score++;
    span.textContent = h2score;
})