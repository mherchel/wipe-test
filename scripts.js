var viewportHeight;

function loadConstants(){
  viewportHeight = Math.ceil(document.getElementById("first").offsetHeight/2);
  //console.log(viewportHeight);
  var second = document.getElementById("second");
  second.style.height = viewportHeight+"px";
  second.style.transform = "translateY("+viewportHeight+"px)";
  window.onscroll = runScroller;
}

function runScroller(){
  document.getElementById("second").style.transform = "translateY("+(viewportHeight-pageYOffset)+"px)";
}