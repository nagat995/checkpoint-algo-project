let button=document.getElementById("change-color-btn")
let box=document.getElementById("color-box")


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];   
  }
  return color;
}

function changeColor(){
  box.style.background = getRandomColor()
}



