window.onload = function() {
var div = document.createElement("div");

div.innerHTML = '<img alt="pickle" src="">';
div.firstElementChild.src = chrome.extension.getURL("images/Pickle_rick_transparent4.png");
div.style.visibility = "visible";
div.style.position = "absolute";
div.style.zIndex = "20000";
div.className = "jack";
div.id = "jack";
document.body.appendChild(div);
document.onmousemove=function(e){
  var x, y;

  var jack = document.getElementById('jack');
  if (e) {x=e.clientX; y=e.clientY;} else {x=event.clientX;y=event.clientY;}
  if (y <= 10) {jack.style.visibility="hidden";} else {jack.style.visibility="visible";}
  jack.style.top=y/*+scroll*/+'px';
  jack.style.left=x-85+'px';
  var scroll = document.body.scrollTop;
  console.log(scroll);
  }};
