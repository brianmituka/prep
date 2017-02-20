var discoBox = document.getElementById("box");
function colorChange(){
  var colours = ["blue","green","yellow","purple","pink"]
  var counter = 0;
  discoBox.style.backgroundColor = colours[counter];
  counter ++;
}
setInterval(colorChange, 3000)
