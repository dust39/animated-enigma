window.addEventListener("orientationchange", function () {
  if (window.matchMedia("(orientation: portrait)").matches) {
    alert("On smart phones, this product is best used in Portrait mode!")
  }
    else{
      console.log("On smart phones, this product is best used in Portrait mode!");
    }
    
})


