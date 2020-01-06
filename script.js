var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Function to set gradient background for 2 color values
function setGradient(){
  body.style.background=
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  // textContent adds a text content to the DOM
  css.textContent = body.style.background+ ";";
}
//  Next step is to change the background color
// Create an event listener, which has input and function for color1 so everytime
// color1 changes color, we can detect it. Same for color2
// Note that we don't need to call the function setGradient because it automatically
// got called once the input event triggered.
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
