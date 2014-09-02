var viewportHeight;

function loadConstants(){
  viewportHeight = Math.ceil(document.getElementById("first").offsetHeight/2);
  var second = document.getElementById("second");
  second.style.height = viewportHeight+"px";
  second.style.webkitTransform = "translateY("+viewportHeight+"px)";
  second.style.transform = "translateY("+viewportHeight+"px)";
  window.onscroll = runScroller;
}

function runScroller(){
  document.getElementById("second").style.webkitTransform = "translateY("+(viewportHeight-pageYOffset)+"px)";
  document.getElementById("second").style.transform = "translateY("+(viewportHeight-pageYOffset)+"px)";
}