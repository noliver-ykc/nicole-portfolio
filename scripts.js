var initialSrc = "/assets/avatar.png";
var scrollSrc = "/assets/avatar-scroll.png";

window.onscroll = function() {scrollEffect()};

//medium devices up

function scrollEffect() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("main-avatar-img").src = scrollSrc;
  } else {
    document.getElementById("main-avatar-img").src = initialSrc;
  }
}

// phones etc
function scrollEffect() {
  if (document.body.scrollTop > 1|| document.documentElement.scrollTop > 1) {
    document.getElementById("main-avatar-img-mobile").src = scrollSrc;
  } else {
    document.getElementById("main-avatar-img-mobile").src = initialSrc;
  }
}

// mobile nav

function mobileMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
