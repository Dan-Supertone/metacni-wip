"use strict";

var imgTrans = false;
window.addEventListener('scroll', function () {
  if (imgTrans == false) {
    var itemMain = document.getElementById('main-bg');
    var itemContact = document.getElementById('contact-bg');
    var itemFooter = document.querySelector('footer');
    var posFromTop = itemFooter.getBoundingClientRect().top;
    var winH = window.innerHeight;

    if (winH > posFromTop) {
      itemMain.classList.add('active');
      itemContact.classList.add('active');
      imgTrans = true;
    }

    ;
  }

  ;
});
/*
addEventListener("mousewheel", e => {
  let direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";;
  let itemMain = document.getElementById('main-bg');
  let itemContact = document.getElementById('contact-bg');

  if (e.deltaY > 0) {
    itemMain.classList.add('active');
    itemContact.classList.add('active');
  } else if (e.deltaY < 0) {
    itemMain.classList.remove('active');
    itemContact.classList.remove('active');
  }
});
*/