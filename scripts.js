var viewportHeight;

function loadConstants(){
  viewportHeight = Math.ceil(document.getElementById("first").offsetHeight/2);
  window.onscroll = runScroller;
}

function runScroller(){
  document.getElementById("second").style.transform = "translateY("+(viewportHeight-pageYOffset)+"px)";
}