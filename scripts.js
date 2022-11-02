var initialSrc = "/assets/avatar.png";
var scrollSrc = "/assets/avatar-scroll.png";

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("main-avatar-img").src = scrollSrc;
  } else {
    document.getElementById("main-avatar-img").src = initialSrc;
  }
}