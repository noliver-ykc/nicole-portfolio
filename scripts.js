var initialSrc = "/assets/avatar.png";
var scrollSrc = "/assets/avatar-scroll.png";

window.onscroll = function() {myFunction()};

//medium devices up

function myFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("main-avatar-img").src = scrollSrc;
  } else {
    document.getElementById("main-avatar-img").src = initialSrc;
  }
}

// phones etc
function myFunction() {
  if (document.body.scrollTop > 1|| document.documentElement.scrollTop > 1) {
    document.getElementById("main-avatar-img-mobile").src = scrollSrc;
  } else {
    document.getElementById("main-avatar-img-mobile").src = initialSrc;
  }
}
