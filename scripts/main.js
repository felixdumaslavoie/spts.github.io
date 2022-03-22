

var Logo = document.getElementById("logo");
var endOfDocumentTop = 150;
var size = 0;

function growShrinkLogo() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (size == 0 && scroll > endOfDocumentTop) {
    Logo.className = 'smallLogo';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.className = 'largeLogo';
   size = 0;
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(3000).then(() => console.log('ran after 1 second1 passed'));

function refreshMain() {
  var test = 0;

  document.addEventListener('DOMContentLoaded', function() {
    alert("It works!");
    growShrinkLogo();
    test = 1;
 });
  ready(function(){

  })
}

