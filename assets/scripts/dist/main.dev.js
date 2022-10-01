"use strict";

/*
window.addEventListener('scroll', function(){

  let winH = window.innerHeight;
  let item = document.getElementById('contact');
  let posFromTop = item.getBoundingClientRect().top;

  let winHalf = winH * 0.5;
  if (winHalf > posFromTop) {
    item.classList.add('active');
  }
});
*/
addEventListener("mousewheel", function (e) {
  var direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
  ;
  var itemMain = document.getElementById('main-bg');
  var itemContact = document.getElementById('contact-bg');

  if (e.deltaY > 0) {
    itemMain.classList.add('active');
    itemContact.classList.add('active');
  } else if (e.deltaY < 0) {
    itemMain.classList.remove('active');
    itemContact.classList.remove('active');
  }
});