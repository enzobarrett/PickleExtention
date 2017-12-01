window.onload = function() {
var div = document.createElement("div");
div.innerHTML = '<img alt="pickle" src="images/Pickle_rick_transparent4.png">';
div.style.visibility = "visible";
div.style.position = "absolute";
div.style.zIndex = "3";
div.className = "jack";
div.id = "jack";
document.body.appendChild(div);
document.onmousemove=function(e){
  var x, y;
  var jack = document.getElementById('jack');
  if (e) {x=e.clientX; y=e.clientY;}
  else {x=event.clientX;y=event.clientY;}
  if (x === 0) {jack.style.visibility=none;}
  else {jack.style.visibility=visible;}
  jack.style.top=y+'px';
  jack.style.left=x-90+'px';
  }};
