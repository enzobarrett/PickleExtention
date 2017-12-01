var div = document.createElement("div");
document.getElementByTagName('div').innerHTML = '<img alt="pickle" src="images/pickle">';
div.style.visibility = "visible";
div.style.position = "absolute";
div.style.zIndex = "3";
document.body.appendChild(div);
console.log(div);
console.log(node);
throw new Error();
var firstevent = -1;
var supported = -1;
var xcurs=0;
var ycurs=0;

if (navigator.appVersion.indexOf("MSIE 5", 0) != -1 || navigator.appVersion.indexOf("MSIE 6", 0) != -1){
	supported = 1;}
if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 5){
	supported = 1;}
if (navigator.appName == "Konqueror" && parseInt(navigator.appVersion) >= 5){
	supported = 1;}

function updatePosition(e){
if(firstevent == -1 && supported != -1){
	document.getElementById("jack").style.visibility = "visible";
	firstevent = 1;}
if (navigator.appName == 'Netscape'){
	xcurs = e.pageX;
	ycurs = e.pageY;}
else{
	xcurs = event.clientX;
	ycurs = event.clientY;}
}

function showBat(){
if (supported != -1) {
	supported = 1;
	document.getElementById("jack").style.left = (xcurs+10) + "px";
	document.getElementById("jack").style.top = (ycurs+2) + "px";
}

myTimeout=setTimeout('showBat()',10);
return;
}

myTimeout=setTimeout('showBat()',10);
document.onmousemove=updatePosition;
