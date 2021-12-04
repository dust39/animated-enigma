


var shape = document.getElementById("shape")


// this is the button to toggle the hamburger button. When clicked in mobile mode it shows the navigation menu

function buttonToggle() {
    document.getElementById("primarynavigation").classList.toggle("open");
}
let x = document.getElementById('button1');
x.onclick = buttonToggle; 

//this changes the circle to a square
function changeAnimationToSquare() {
    document.getElementById("shape").classList.toggle("squareproperties");
}
let z = document.getElementById('button3');
z.onclick = changeAnimationToSquare; 


//this is the button on the CSS animation page. When clicked it restarts the animation. Should work for circle or square shape

function animationStart() {
   
    //  console.log(shape) //what is being returned for shape
    //console.log(shape.className)// what class name is being returned
    // console.log(typeof shape.className) what is the type of data being returned. console shows string

   
        if( shape.className == "circleproperties squareproperties"){
           // console.log(shape.className)
            
          document.getElementById("shape").classList.remove("circleproperties");
          document.getElementById("shape").classList.remove("squareproperties");
          
          void y.offsetWidth;
          document.getElementById("shape").classList.add("circleproperties");
          document.getElementById("shape").classList.add("squareproperties");
                        
        }
      else{
       // console.log('no')
          document.getElementById("shape").classList.remove("circleproperties");
        void y.offsetWidth;
        document.getElementById("shape").classList.add("circleproperties");
          
      }
      
    }    

let y = document.getElementById('button2');
y.onclick = animationStart; 



if (window.matchMedia("(orientation: landscape)").matches) {
  alert("For this product please use portrait mode!")
}