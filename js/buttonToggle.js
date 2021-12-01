function buttonToggle() {
    document.getElementById("primarynavigation").classList.toggle("open");
}
let x = document.getElementById('button1');
x.onclick = buttonToggle; 

function animationStart() {
    document.getElementById("circle").classList.toggle("none");
}
let y = document.getElementById('button2');
y.onclick = animationStart; 
   