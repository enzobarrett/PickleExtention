window.onload = function() {
var div = document.createElement("div");
div.innerHTML = '<img alt="pickle" src="images/pickle">';
div.style.visibility = "visible";
div.style.position = "absolute";
div.style.zIndex = "3";
div.className = "jack";
document.body.appendChild(div);

document.onmousemove=function(e){
  var x, y;
  if (e) {x=e.clientX; y=e.clientY;} 
  else {x=event.clientX;y=event.clientY;}
  var jack = document.getElementById('jack');
  jack.style.top=y+'px';
  jack.style.left=x+50+'px';
  }};

