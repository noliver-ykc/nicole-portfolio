
// scrolling changes image
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

// mobile nav opener
const menuBtn = document.querySelector('.mobile-nav');
let menuOpen = false;

// ↓ can probably be refactored using toggle
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
